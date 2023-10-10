<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PaymentService;
use App\Http\Controllers\Controller;
use App\Services\StudentService;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $payment = app(PaymentService::class);
        $result = $payment->pay($request);
        if ($result == "success") {
            app(StudentService::class)->addClass($request);
            return response()->json([
                'status' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'error' => $result
            ]);
        }
    }
}
