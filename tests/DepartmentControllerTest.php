<?php

use Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController;
 
class PrincipalTest extends PHPUnit\Framework\TestCase {
    
    /**
     * El test s'inicia però hem falla:
     * Fatal error: Class 'App\Http\Controllers\Controller' not found in
     * D:\www\programming\packages\rogerforner\scool_programming\src\Http\Controllers\API\ApiResponseController.php
     * on line 8
     */
    public function testIndex()
    {
        $this->assertTrue(DepartmentController::index());
    }
 
}