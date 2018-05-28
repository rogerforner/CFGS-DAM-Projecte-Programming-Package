
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:AddDepartmentManagerToUsersTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="AddDepartmentManagerToUsersTable.html">AddDepartmentManagerToUsersTable</a>                    </div>                </li>                            <li data-name="class:CreateDepartmentUserTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateDepartmentUserTable.html">CreateDepartmentUserTable</a>                    </div>                </li>                            <li data-name="class:CreateDepartmentsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateDepartmentsTable.html">CreateDepartmentsTable</a>                    </div>                </li>                            <li data-name="class:CreateProfessionalModulesTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateProfessionalModulesTable.html">CreateProfessionalModulesTable</a>                    </div>                </li>                            <li data-name="class:CreateTemariesTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateTemariesTable.html">CreateTemariesTable</a>                    </div>                </li>                            <li data-name="class:CreateTrainingUnitsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateTrainingUnitsTable.html">CreateTrainingUnitsTable</a>                    </div>                </li>                            <li data-name="class:PrincipalTest" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="PrincipalTest.html">PrincipalTest</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Rogerforner" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner.html">Rogerforner</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Rogerforner_ScoolProgramming" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner/ScoolProgramming.html">ScoolProgramming</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Rogerforner_ScoolProgramming_Http" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner/ScoolProgramming/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Rogerforner_ScoolProgramming_Http_Controllers" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner/ScoolProgramming/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Rogerforner_ScoolProgramming_Http_Controllers_API" >                    <div style="padding-left:72px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner/ScoolProgramming/Http/Controllers/API.html">API</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Rogerforner_ScoolProgramming_Http_Controllers_API_ApiResponseController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Http/Controllers/API/ApiResponseController.html">ApiResponseController</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Http_Controllers_API_DepartmentController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html">DepartmentController</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Http_Controllers_API_ProfessionalModuleController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html">ProfessionalModuleController</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Http_Controllers_API_TemaryController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html">TemaryController</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Http_Controllers_API_TrainingUnitController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html">TrainingUnitController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Rogerforner_ScoolProgramming_Http_Controllers_Web" >                    <div style="padding-left:72px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner/ScoolProgramming/Http/Controllers/Web.html">Web</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Rogerforner_ScoolProgramming_Http_Controllers_Web_LandingController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html">LandingController</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Rogerforner_ScoolProgramming_Models" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Rogerforner/ScoolProgramming/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Rogerforner_ScoolProgramming_Models_Department" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Models/Department.html">Department</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Models_ProfessionalModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Models/ProfessionalModule.html">ProfessionalModule</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Models_Temary" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Models/Temary.html">Temary</a>                    </div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_Models_TrainingUnit" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/Models/TrainingUnit.html">TrainingUnit</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Rogerforner_ScoolProgramming_ScoolProgrammingServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Rogerforner/ScoolProgramming/ScoolProgrammingServiceProvider.html">ScoolProgrammingServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "Rogerforner.html", "name": "Rogerforner", "doc": "Namespace Rogerforner"},{"type": "Namespace", "link": "Rogerforner/ScoolProgramming.html", "name": "Rogerforner\\ScoolProgramming", "doc": "Namespace Rogerforner\\ScoolProgramming"},{"type": "Namespace", "link": "Rogerforner/ScoolProgramming/Http.html", "name": "Rogerforner\\ScoolProgramming\\Http", "doc": "Namespace Rogerforner\\ScoolProgramming\\Http"},{"type": "Namespace", "link": "Rogerforner/ScoolProgramming/Http/Controllers.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers", "doc": "Namespace Rogerforner\\ScoolProgramming\\Http\\Controllers"},{"type": "Namespace", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API", "doc": "Namespace Rogerforner\\ScoolProgramming\\Http\\Controllers\\API"},{"type": "Namespace", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web", "doc": "Namespace Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web"},{"type": "Namespace", "link": "Rogerforner/ScoolProgramming/Models.html", "name": "Rogerforner\\ScoolProgramming\\Models", "doc": "Namespace Rogerforner\\ScoolProgramming\\Models"},
            
            {"type": "Class",  "link": "AddDepartmentManagerToUsersTable.html", "name": "AddDepartmentManagerToUsersTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "AddDepartmentManagerToUsersTable", "fromLink": "AddDepartmentManagerToUsersTable.html", "link": "AddDepartmentManagerToUsersTable.html#method_up", "name": "AddDepartmentManagerToUsersTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "AddDepartmentManagerToUsersTable", "fromLink": "AddDepartmentManagerToUsersTable.html", "link": "AddDepartmentManagerToUsersTable.html#method_down", "name": "AddDepartmentManagerToUsersTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateDepartmentUserTable.html", "name": "CreateDepartmentUserTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateDepartmentUserTable", "fromLink": "CreateDepartmentUserTable.html", "link": "CreateDepartmentUserTable.html#method_up", "name": "CreateDepartmentUserTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateDepartmentUserTable", "fromLink": "CreateDepartmentUserTable.html", "link": "CreateDepartmentUserTable.html#method_down", "name": "CreateDepartmentUserTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateDepartmentsTable.html", "name": "CreateDepartmentsTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateDepartmentsTable", "fromLink": "CreateDepartmentsTable.html", "link": "CreateDepartmentsTable.html#method_up", "name": "CreateDepartmentsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateDepartmentsTable", "fromLink": "CreateDepartmentsTable.html", "link": "CreateDepartmentsTable.html#method_down", "name": "CreateDepartmentsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateProfessionalModulesTable.html", "name": "CreateProfessionalModulesTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateProfessionalModulesTable", "fromLink": "CreateProfessionalModulesTable.html", "link": "CreateProfessionalModulesTable.html#method_up", "name": "CreateProfessionalModulesTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateProfessionalModulesTable", "fromLink": "CreateProfessionalModulesTable.html", "link": "CreateProfessionalModulesTable.html#method_down", "name": "CreateProfessionalModulesTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateTemariesTable.html", "name": "CreateTemariesTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateTemariesTable", "fromLink": "CreateTemariesTable.html", "link": "CreateTemariesTable.html#method_up", "name": "CreateTemariesTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateTemariesTable", "fromLink": "CreateTemariesTable.html", "link": "CreateTemariesTable.html#method_down", "name": "CreateTemariesTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateTrainingUnitsTable.html", "name": "CreateTrainingUnitsTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateTrainingUnitsTable", "fromLink": "CreateTrainingUnitsTable.html", "link": "CreateTrainingUnitsTable.html#method_up", "name": "CreateTrainingUnitsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateTrainingUnitsTable", "fromLink": "CreateTrainingUnitsTable.html", "link": "CreateTrainingUnitsTable.html#method_down", "name": "CreateTrainingUnitsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "PrincipalTest.html", "name": "PrincipalTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "PrincipalTest", "fromLink": "PrincipalTest.html", "link": "PrincipalTest.html#method_testIndex", "name": "PrincipalTest::testIndex", "doc": "&quot;El test s&#039;inicia per\u00f2 hem falla:\nFatal error: Class &#039;App\\Http\\Controllers\\Controller&#039; not found in\nD:\\www\\programming\\packages\\rogerforner\\scool_programming\\src\\Http\\Controllers\\API\\ApiResponseController.php\non line 8&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ApiResponseController.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ApiResponseController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ApiResponseController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ApiResponseController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ApiResponseController.html#method_sendResponse", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ApiResponseController::sendResponse", "doc": "&quot;M\u00e8tode emprat per a aquelles peticions que s&#039;hagin dut endavant\nsatisfactoriament.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ApiResponseController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ApiResponseController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ApiResponseController.html#method_sendError", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ApiResponseController::sendError", "doc": "&quot;M\u00e8tode emprat per a aquelles peticions que no s&#039;hagin dut endavant\nsatisfactoriament.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html#method___construct", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html#method_index", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html#method_store", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html#method_show", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html#method_update", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/DepartmentController.html#method_destroy", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\DepartmentController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html#method___construct", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html#method_index", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html#method_store", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html#method_show", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html#method_update", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/ProfessionalModuleController.html#method_destroy", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\ProfessionalModuleController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html#method___construct", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html#method_index", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html#method_store", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html#method_show", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html#method_update", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TemaryController.html#method_destroy", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TemaryController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html#method___construct", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html#method_index", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html#method_store", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html#method_show", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html#method_update", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/API/TrainingUnitController.html#method_destroy", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\API\\TrainingUnitController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_index", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_create", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::create", "doc": "&quot;Show the form for creating a new resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_store", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_show", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_edit", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_update", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController", "fromLink": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html", "link": "Rogerforner/ScoolProgramming/Http/Controllers/Web/LandingController.html#method_destroy", "name": "Rogerforner\\ScoolProgramming\\Http\\Controllers\\Web\\LandingController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Models", "fromLink": "Rogerforner/ScoolProgramming/Models.html", "link": "Rogerforner/ScoolProgramming/Models/Department.html", "name": "Rogerforner\\ScoolProgramming\\Models\\Department", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\Department", "fromLink": "Rogerforner/ScoolProgramming/Models/Department.html", "link": "Rogerforner/ScoolProgramming/Models/Department.html#method_users", "name": "Rogerforner\\ScoolProgramming\\Models\\Department::users", "doc": "&quot;Users.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\Department", "fromLink": "Rogerforner/ScoolProgramming/Models/Department.html", "link": "Rogerforner/ScoolProgramming/Models/Department.html#method_professionalModules", "name": "Rogerforner\\ScoolProgramming\\Models\\Department::professionalModules", "doc": "&quot;Professional Modules.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Models", "fromLink": "Rogerforner/ScoolProgramming/Models.html", "link": "Rogerforner/ScoolProgramming/Models/ProfessionalModule.html", "name": "Rogerforner\\ScoolProgramming\\Models\\ProfessionalModule", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\ProfessionalModule", "fromLink": "Rogerforner/ScoolProgramming/Models/ProfessionalModule.html", "link": "Rogerforner/ScoolProgramming/Models/ProfessionalModule.html#method_department", "name": "Rogerforner\\ScoolProgramming\\Models\\ProfessionalModule::department", "doc": "&quot;Department.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\ProfessionalModule", "fromLink": "Rogerforner/ScoolProgramming/Models/ProfessionalModule.html", "link": "Rogerforner/ScoolProgramming/Models/ProfessionalModule.html#method_trainingUnits", "name": "Rogerforner\\ScoolProgramming\\Models\\ProfessionalModule::trainingUnits", "doc": "&quot;Training Units.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Models", "fromLink": "Rogerforner/ScoolProgramming/Models.html", "link": "Rogerforner/ScoolProgramming/Models/Temary.html", "name": "Rogerforner\\ScoolProgramming\\Models\\Temary", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\Temary", "fromLink": "Rogerforner/ScoolProgramming/Models/Temary.html", "link": "Rogerforner/ScoolProgramming/Models/Temary.html#method_trainingUnit", "name": "Rogerforner\\ScoolProgramming\\Models\\Temary::trainingUnit", "doc": "&quot;Training Unit.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming\\Models", "fromLink": "Rogerforner/ScoolProgramming/Models.html", "link": "Rogerforner/ScoolProgramming/Models/TrainingUnit.html", "name": "Rogerforner\\ScoolProgramming\\Models\\TrainingUnit", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\TrainingUnit", "fromLink": "Rogerforner/ScoolProgramming/Models/TrainingUnit.html", "link": "Rogerforner/ScoolProgramming/Models/TrainingUnit.html#method_professionalModule", "name": "Rogerforner\\ScoolProgramming\\Models\\TrainingUnit::professionalModule", "doc": "&quot;Professional Module.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\Models\\TrainingUnit", "fromLink": "Rogerforner/ScoolProgramming/Models/TrainingUnit.html", "link": "Rogerforner/ScoolProgramming/Models/TrainingUnit.html#method_temaries", "name": "Rogerforner\\ScoolProgramming\\Models\\TrainingUnit::temaries", "doc": "&quot;Temaries.&quot;"},
            
            {"type": "Class", "fromName": "Rogerforner\\ScoolProgramming", "fromLink": "Rogerforner/ScoolProgramming.html", "link": "Rogerforner/ScoolProgramming/ScoolProgrammingServiceProvider.html", "name": "Rogerforner\\ScoolProgramming\\ScoolProgrammingServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\ScoolProgrammingServiceProvider", "fromLink": "Rogerforner/ScoolProgramming/ScoolProgrammingServiceProvider.html", "link": "Rogerforner/ScoolProgramming/ScoolProgrammingServiceProvider.html#method_boot", "name": "Rogerforner\\ScoolProgramming\\ScoolProgrammingServiceProvider::boot", "doc": "&quot;Bootstrap services.&quot;"},
                    {"type": "Method", "fromName": "Rogerforner\\ScoolProgramming\\ScoolProgrammingServiceProvider", "fromLink": "Rogerforner/ScoolProgramming/ScoolProgrammingServiceProvider.html", "link": "Rogerforner/ScoolProgramming/ScoolProgrammingServiceProvider.html#method_register", "name": "Rogerforner\\ScoolProgramming\\ScoolProgrammingServiceProvider::register", "doc": "&quot;Register services.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


