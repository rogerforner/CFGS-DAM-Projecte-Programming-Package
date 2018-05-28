<?php

namespace Rogerforner\ScoolProgramming\Http\Controllers\API;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
use Rogerforner\ScoolProgramming\Models\ProfessionalModule;
use Rogerforner\ScoolProgramming\Models\TrainingUnit;
use Validator;

class TrainingUnitController extends ApiResponseController
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
        // Obtenir totes les UFs.
        $trainingUnitsWithPagination = TrainingUnit::paginate(8, ['*'], 'tunits');
        $trainingUnits               = TrainingUnit::all();
        $promodules                  = ProfessionalModule::all();
        $userAuth                    = Auth::user();

        // Guardem en un array la paginació i les UFs.
        $response = [
            'pagination' => [
                'total'        => $trainingUnitsWithPagination->total(),
                'per_page'     => $trainingUnitsWithPagination->perPage(),
                'current_page' => $trainingUnitsWithPagination->currentPage(),
                'last_page'    => $trainingUnitsWithPagination->lastPage(),
                'from'         => $trainingUnitsWithPagination->firstItem(),
                'to'           => $trainingUnitsWithPagination->lastItem()
            ],
            'tunitswp'   => $trainingUnitsWithPagination,
            'tunits'     => $trainingUnits,
            'promodules' => $promodules,
            'userAuth'   => $userAuth,
        ];
        
        // Retornem l'array amb les UFs i la paginació passant les dades
        // d'aquest a través del mètode sendResponse() de ApiResponseController.
        return $this->sendResponse($response, 'Training Units retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function store(Request $request)
    {
        // Només es poden crear UFs si existeix algun MP. Si no hi ha MPs a la
        // BD retornem un missatge avisant.
        $promodules = ProfessionalModule::all();
        if ($promodules->isEmpty()) {
            return $this->sendError('To create Training Units, professional modules are necessary. Create at least one professional module.',null);
        }

        // Obtenir l'usuari que duu a terme l'acció.
        $userAuth = Auth::user()->email;

        // Dades del formulari.
        $data = $request->all();

        // Validar les dades.
        $validator = Validator::make($data, [
            'uf'                     => 'required|integer',
            'name'                   => 'required|string|max:150',
            'date_start'             => 'required|date',
            'date_end'               => 'required|date',
            'section1'               => 'nullable',
            'section2'               => 'nullable',
            'section3'               => 'nullable',
            'section4'               => 'nullable',
            'professional_module_id' => 'required|integer',
        ]);

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // Crear la UF (la validació ha sortit bé).
        $trainingUnit = TrainingUnit::create([
            'uf'                     => $data['uf'],
            'name'                   => $data['name'],
            'date_start'             => $data['date_start'],
            'date_end'               => $data['date_end'],
            'section1'               => $data['section1'],
            'section2'               => $data['section2'],
            'section3'               => $data['section3'],
            'section4'               => $data['section4'],
            'professional_module_id' => $data['professional_module_id'],
            'created_by'             => $userAuth,
        ]);

        return $this->sendResponse(null, 'Training Unit created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function show($id)
    {
        // Obtenir la UF.
        $tunit = TrainingUnit::findOrFail($id);

        // Guardem en un array les dades del MP, incloses les seves relacions.
        $response = [
            'tunit'  => $tunit,
            'tunitP' => $tunit['professionalModule'],
            'tunitT' => $tunit['temaries'],
        ];
        
        return $this->sendResponse($response, 'Training Unit data retrieved successfully.');
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

        // Obtenir la UF a modificar.
        $trainingUnit = TrainingUnit::findOrFail($id);

        // Obtenir l'usuari que duu a terme l'acció i l'afegim entre les dades
        // obtingudes per emplenar el camp "updated_by".
        $data['updated_by'] = Auth::user()->email;

        // Validar les dades.
        // "appoved" només serà validat si es duu a terme l'acció d'arpovar un MP.
        if ($data['approved'] == true || $data['approved'] == false) {
            $validator = Validator::make($data, [
                'approved' => 'boolean',
            ]);
        } else {
            $validator = Validator::make($data, [
                'uf'                     => 'required|integer',
                'name'                   => 'required|string|max:150',
                'date_start'             => 'required|date',
                'date_end'               => 'required|date',
                'section1'               => 'nullable',
                'section2'               => 'nullable',
                'section3'               => 'nullable',
                'section4'               => 'nullable',
                'professional_module_id' => 'required|integer',
            ]);
        }

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // Actualitzar la UF.
        $trainingUnit->update($data);

        return $this->sendResponse(null, 'Training Unit updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function destroy($id)
    {
        // Obtenir la UF a eliminar.
        $trainingUnit = TrainingUnit::findOrFail($id);

        // Eliminar la UF.
        $trainingUnit->delete();
        
        return $this->sendResponse(null, 'Training Unit removed successfully.');
    }
}
