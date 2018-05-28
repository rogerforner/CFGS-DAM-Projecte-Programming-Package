<?php

use Illuminate\Http\Request;
use Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController;
use Rogerforner\ScoolProgramming\Http\Controllers\API\ProfessionalModuleController;
use Rogerforner\ScoolProgramming\Http\Controllers\API\TrainingUnitController;
use Rogerforner\ScoolProgramming\Http\Controllers\API\TemaryController;
use Rogerforner\ScoolProgramming\Http\Controllers\Web\AppController;
use Rogerforner\ScoolProgramming\Http\Controllers\Web\LandingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
| php artisan route:list (veure rutes: programming)
|
*/

Route::group(['prefix' => 'api/scool/programming', 'middleware' => 'auth:api'], function () {
    Route::resource('departments', DepartmentController::class, [
        'except' => ['create', 'edit']
    ]);
    Route::resource('professional-modules', ProfessionalModuleController::class, [
        'except' => ['create', 'edit']
    ]);
    Route::resource('training-units', TrainingUnitController::class, [
        'except' => ['create', 'edit']
    ]);
    Route::resource('temaries', TemaryController::class, [
        'except' => ['create', 'edit']
    ]);
});

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
| php artisan route:list (veure rutes: programming)
|
*/

// Route::group(['prefix'=>'scool'], function () {
//     Route::resource('programming', LandingController::class, [
//         'only' => ['index']
//     ]);
// });