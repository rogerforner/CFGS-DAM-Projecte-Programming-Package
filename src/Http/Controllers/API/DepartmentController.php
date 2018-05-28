<?php

namespace Rogerforner\ScoolProgramming\Http\Controllers\API;

use App\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
use Rogerforner\ScoolProgramming\Models\Department;
use Validator;

class DepartmentController extends ApiResponseController
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
        // Obtenir tots els departaments + Usuari que fa la petició.
        $departmentsWithPagination = Department::paginate(8, ['*'], 'departments');
        $departments               = Department::all();
        $userAuth                  = Auth::user();

        // Guardem en un array la paginació i els departaments.
        $response = [
            'pagination' => [
                'total'        => $departmentsWithPagination->total(),
                'per_page'     => $departmentsWithPagination->perPage(),
                'current_page' => $departmentsWithPagination->currentPage(),
                'last_page'    => $departmentsWithPagination->lastPage(),
                'from'         => $departmentsWithPagination->firstItem(),
                'to'           => $departmentsWithPagination->lastItem()
            ],
            'departmentswp' => $departmentsWithPagination,
            'departments'   => $departments,
            'userAuth'      => $userAuth,
        ];
        
        // Retornem l'array amb els departaments i la paginació passant les dades
        // d'aquest a través del mètode sendResponse() de ApiResponseController.
        return $this->sendResponse($response, 'Departments retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function store(Request $request)
    {
        // Obtenir l'usuari que duu a terme l'acció.
        $userAuth = Auth::user()->email;

        // Dades del formulari.
        $data = $request->all();

        // Validar les dades.
        // ---------------------------------------------------------------------
        $validator = Validator::make($data, [
            'name'        => 'required|string|max:150|unique:departments',
            'description' => 'nullable',
            'manager'     => 'required|integer'
        ]);

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // A continuació obtenim l'usuari que ha estat seleccionat com a cap de
        // departament. manager = id (usuari)
        $managerId   = $request['manager'];
        $userManager = User::find($managerId);

        // Validem que l'usuari escollit no sigui, ja, cap de departament.
        if ($userManager->department_id) {
            return $this->sendError('This user is already the department manager.',null);
        }

        // Ens assegurem de que l'usuari seleccionat existeix entre els professors
        // seleccionats.
        $arrTeachers = $request['teachers'];
        if (!in_array($managerId, $arrTeachers)) {
            return $this->sendError('This user can not be selected because he has not been selected in "Teachers".',null);
        }


        // Crear el departament (la validació ha sortit bé).
        // ---------------------------------------------------------------------
        $department = Department::create([
            'name'        => $data['name'],
            'description' => $data['description'],
            'created_by'  => $userAuth,
        ]);

        // Un cop creat el departament ja es poden insertar els professors
        // seleccionats. Primer obtenim l'id del departament que ha estat creat.
        $departmentCreatedId = $department->id;
        $departmentCreated   = Department::find($departmentCreatedId);

        // Obtenim els/les professors/res seleccionats/des.
        // I afegim les dades a la taula pivot "department_user".
        $arrTeachers = $request['teachers'];
        $departmentCreated->users()->sync($arrTeachers);

        // Modifiquem la columna "department_id" en la taula "users" per definir
        // el departament del qual és cap de departament l'usuari.
        // ---------------------------------------------------------------------
        $userManager->update([
            'department_id' => $departmentCreatedId,
        ]);

        return $this->sendResponse(null, 'Department created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function show($id)
    {
        // Obtenir el departament.
        $department = Department::findOrFail($id);
        $manager    = User::where('department_id', '=', $department->id)->get()->first();

        // Guardem en un array les dades del departament, incloses les seves
        // relacions.
        $response = [
            'department'   => $department,
            'departmentM'  => $manager,
            'departmentUs' => $department['users'],
            'departmentMP' => $department['professionalModules'],
        ];
        
        // Retornem l'array amb els departaments i la paginació passant les dades
        // d'aquest a través del mètode sendResponse() de ApiResponseController.
        return $this->sendResponse($response, 'Department data retrieved successfully.');
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
        // Obtenir el departament.
        $department = Department::findOrFail($id);

        // Dades del formulari.
        $data = $request->all();

        // Obtenir l'usuari que duu a terme l'acció i l'afegim entre les dades
        // obtingudes per emplenar el camp "updated_by".
        $data['updated_by'] = Auth::user()->email;

        // Validar les dades.
        // ---------------------------------------------------------------------
        $validator = Validator::make($data, [
            'name' => [
                'required',
                'string',
                'max:150',
                Rule::unique('departments')->ignore($department->id)
            ],
            'description' => 'nullable',
            'manager'     => 'required|integer'
        ]);

        // Si la validació de les dades introduïdes no es satisfactoria avisem.
        if ($validator->fails()) {
            return $this->sendError('A validation error has occurred.', $validator->errors());
        }

        // A continuació obtenim l'usuari que ha estat seleccionat com a cap de
        // departament. manager = id (usuari)
        $managerId   = $request['manager'];
        $userManager = User::find($managerId);

        // Validem que l'usuari escollit no sigui, ja, cap de departament.
        // Ignorem l'usuari si és cap de departament i aquest és el seu.
        if ($userManager->department_id) {
            if ($userManager->department_id != $department->id) {
                return $this->sendError('This user is already the department manager.',null);
            }
        }

        // Ens assegurem de que l'usuari seleccionat existeix entre els professors
        // seleccionats.
        $arrTeachers = $request['teachers'];
        if (!in_array($managerId, $arrTeachers)) {
            return $this->sendError('This user can not be selected because he has not been selected in "Teachers".',null);
        }


        // Actualitzar el departament (la validació ha sortit bé).
        // ---------------------------------------------------------------------
        $department->update($data);

        // Un cop creat el departament ja es poden insertar els professors
        // seleccionats. Primer obtenim l'id del departament que ha estat creat.
        $departmentCreatedId = $department->id;
        $departmentCreated   = Department::find($departmentCreatedId);

        // Obtenim els/les professors/res seleccionats/des.
        // I afegim les dades a la taula pivot "department_user".
        $arrTeachers = $request['teachers'];
        $departmentCreated->users()->sync($arrTeachers);

        // Modifiquem la columna "department_id" en la taula "users" per definir
        // el departament del qual és cap de departament l'usuari.
        // ---------------------------------------------------------------------
        $userManager->update([
            'department_id' => $departmentCreatedId,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Rogerforner\ScoolProgramming\Http\Controllers\API\ApiResponseController;
     */
    public function destroy($id)
    {
        // Obtenir el departament a eliminar.
        $department = Department::findOrFail($id);

        // Eliminar el departament.
        $department->delete();
        
        return $this->sendResponse(null, 'Department removed successfully.');
    }
}
