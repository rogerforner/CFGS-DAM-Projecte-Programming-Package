<?php

namespace Rogerforner\ScoolProgramming\Http\Controllers\API;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
use Rogerforner\ScoolProgramming\Models\Temary;
use Rogerforner\ScoolProgramming\Models\TrainingUnit;
use Validator;

class TemaryController extends ApiResponseController
{
    /**
     * Create a new controller instance.
     * Only authenticated users will be able to interact with the methods of
     * this Controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function index()
    {
        // Obtenir tots els NFs.
        $temarieswp = Temary::paginate(8, ['*'], 'temaries');
        $temaries   = Temary::all();
        $tunits     = TrainingUnit::all();
        $userAuth   = Auth::user();

        // Guardem en un array la paginació i els NFs.
        $response = [
            'pagination' => [
                'total'        => $temarieswp->total(),
                'per_page'     => $temarieswp->perPage(),
                'current_page' => $temarieswp->currentPage(),
                'last_page'    => $temarieswp->lastPage(),
                'from'         => $temarieswp->firstItem(),
                'to'           => $temarieswp->lastItem()
            ],
            'temarieswp' => $temarieswp,
            'temaries'   => $temaries,
            'tunits'     => $tunits,
            'userAuth'   => $userAuth,
        ];
        
        // Retornem l'array amb els NFs i la paginació passant les dades
        // d'aquest a través del mètode sendResponse() de ApiResponseController.
        return $this->sendResponse($response, 'Temaries retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function store(Request $request)
    {
        // Només es poden crear NFs si existeix alguna UF. Si no hi ha UFs a la
        // BD retornem un missatge avisant.
        $promodules = TrainingUnit::all();
        if ($promodules->isEmpty()) {
            return $this->sendError('To create Temaries, training units are necessary. Create at least one training unit.',null);
        }

        // Obtenir l'usuari que duu a terme l'acció.
        $userAuth = Auth::user()->email;

        // Dades del formulari.
        $data = $request->all();

        // Validar les dades.
        $validator = Validator::make($data, [
            'nf'               => 'required|integer',
            'duration'         => 'required|integer',
            'name'             => 'required|string|max:150',
            'description'      => 'nullable',
            'training_unit_id' => 'required|integer',
        ]);

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // Crear el NF (la validació ha sortit bé).
        $temary = Temary::create([
            'nf'               => $data['nf'],
            'duration'         => $data['duration'],
            'name'             => $data['name'],
            'description'      => $data['description'],
            'training_unit_id' => $data['training_unit_id'],
            'created_by'       => $userAuth,
        ]);

        return $this->sendResponse(null, 'Temary created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function show($id)
    {
        // Obtenir el NF.
        $temary = Temary::findOrFail($id);

        // Guardem en un array les dades del NF, incloses les seves relacions.
        $response = [
            'temary'  => $temary,
            'temaryT' => $temary['trainingUnit'],
        ];
        
        return $this->sendResponse($response, 'Temary data retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function update(Request $request, $id)
    {
        // Dades del formulari.
        $data = $request->all();

        // Obtenir el NF a modificar.
        $temary = Temary::findOrFail($id);

        // Obtenir l'usuari que duu a terme l'acció i l'afegim entre les dades
        // obtingudes per emplenar el camp "updated_by".
        $data['updated_by'] = Auth::user()->email;

        // Validar les dades.
        $validator = Validator::make($data, [
            'nf'               => 'required|integer',
            'duration'         => 'required|integer',
            'name'             => 'required|string|max:150',
            'description'      => 'nullable',
            'training_unit_id' => 'required|integer',
        ]);

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // Actualitzar la UF.
        $temary->update($data);

        return $this->sendResponse(null, 'Temary updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function destroy($id)
    {
        // Obtenir el NF a eliminar.
        $temary = Temary::findOrFail($id);

        // Eliminar el NF.
        $temary->delete();
        
        return $this->sendResponse(null, 'Temary removed successfully.');
    }
}
