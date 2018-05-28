<?php

namespace Rogerforner\ScoolProgramming\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiResponseController extends Controller
{
    /**
     * Mètode emprat per a aquelles peticions que s'hagin dut endavant
     * satisfactoriament.
     * 
     * Si passem 'null' al paràmetre "result" no el mostrarem, l'eliminem de
     * "apiResponseData". No ens interessa passar un índex buit al array.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message)
    {
        $response = [
            'success'         => true,
            'apiResponseData' => $result,
            'message'         => $message,
        ];

        if (is_null($result)) {
            unset($response[1]); // Índex 1 = apiResponseData.
        }

        return response()->json($response);
    }

    /**
     * Mètode emprat per a aquelles peticions que no s'hagin dut endavant
     * satisfactoriament.
     * 
     * Per defecte es defineix un tipus de resposta "warning", però si l'array
     * "errorMessages" no està buit, el tipus es canvia a "error". Això ho emprem
     * per determinar quin tipus de notificació (colors) mostrar.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [])
    {
        $response = [
            'success' => false,
            'message' => $error,
            'type'    => 'warning',
        ];

        if (!empty($errorMessages)) {
            $response['apiResponseData'] = $errorMessages;
            $response['type']            = 'error';
        }

        return response()->json($response);
    }
}
