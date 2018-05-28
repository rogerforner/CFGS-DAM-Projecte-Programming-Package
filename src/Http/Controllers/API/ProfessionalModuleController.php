<?php

namespace Rogerforner\ScoolProgramming\Http\Controllers\API;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
use Rogerforner\ScoolProgramming\Models\Department;
use Rogerforner\ScoolProgramming\Models\ProfessionalModule;
use Validator;

class ProfessionalModuleController extends ApiResponseController
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
        // Obtenir tots els MPs + Departaments + Usuari que fa la petició.
        $professionalModulesWithPagination = ProfessionalModule::paginate(8, ['*'], 'promodules');
        $professionalModules               = ProfessionalModule::all();
        $departments                       = Department::all();
        $userAuth                          = Auth::user();

        // Guardem en un array la paginació i els MPs.
        $response = [
            'pagination' => [
                'total'        => $professionalModulesWithPagination->total(),
                'per_page'     => $professionalModulesWithPagination->perPage(),
                'current_page' => $professionalModulesWithPagination->currentPage(),
                'last_page'    => $professionalModulesWithPagination->lastPage(),
                'from'         => $professionalModulesWithPagination->firstItem(),
                'to'           => $professionalModulesWithPagination->lastItem()
            ],
            'promoduleswp' => $professionalModulesWithPagination,
            'promodules'   => $professionalModules,
            'departments'  => $departments,
            'userAuth'     => $userAuth,
        ];
        
        // Retornem l'array amb els MPs i la paginació passant les dades
        // d'aquest a través del mètode sendResponse() de ApiResponseController.
        return $this->sendResponse($response, 'Professional Modules retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function store(Request $request)
    {
        // Només es poden crear MPs si existeix algun departament. Si no hi ha
        // departaments a la BD retornem un missatge avisant.
        $departments = Department::all();
        if ($departments->isEmpty()) {
            return $this->sendError('To create Professional Modules, departments are necessary. Create at least one department.',null);
        }

        // Obtenir l'usuari que duu a terme l'acció.
        $userAuth = Auth::user()->email;

        // Dades del formulari.
        $data = $request->all();

        // Validar les dades.
        $validator = Validator::make($data, [
            'mp'            => 'required|integer',
            'name'          => 'required|string|max:150',
            'section1'      => 'nullable',
            'section2'      => 'nullable',
            'section3'      => 'nullable',
            'section4'      => 'nullable',
            'department_id' => 'required|integer',
        ]);

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // Crear el MP (la validació ha sortit bé).
        $professionalModule = ProfessionalModule::create([
            'mp'            => $data['mp'],
            'name'          => $data['name'],
            'section1'      => $data['section1'],
            'section2'      => $data['section2'],
            'section3'      => $data['section3'],
            'section4'      => $data['section4'],
            'department_id' => $data['department_id'],
            'created_by'    => $userAuth,
        ]);

        return $this->sendResponse(null, 'Professional Module created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function show($id)
    {
        // Obtenir el MP.
        $professionalModule = ProfessionalModule::findOrFail($id);

        // Guardem en un array les dades del MP, incloses les seves relacions.
        $response = [
            'promodule'  => $professionalModule,
            'promoduleD' => $professionalModule['department'],
            'promoduleT' => $professionalModule['trainingUnits'],
        ];
        
        return $this->sendResponse($response, 'Professional Module data retrieved successfully.');
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

        // Obtenir el MP a modificar.
        $professionalModule = ProfessionalModule::findOrFail($id);

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
                'mp'            => 'required|integer',
                'name'          => 'required|string|max:150',
                'section1'      => 'nullable',
                'section2'      => 'nullable',
                'section3'      => 'nullable',
                'section4'      => 'nullable',
                'department_id' => 'required|integer',
            ]);
        }

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // Actualitzar el MP.
        $professionalModule->update($data);

        return $this->sendResponse(null, 'Professional Module updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function destroy($id)
    {
        // Obtenir el MP a eliminar.
        $professionalModule = ProfessionalModule::findOrFail($id);

        // Eliminar el MP.
        $professionalModule->delete();
        
        return $this->sendResponse(null, 'Professional Module removed successfully.');
    }
}
