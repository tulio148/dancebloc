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
        $payment->pay($request);
        if ($payment) {
            app(StudentService::class)->addClass($request);
        }
    }
}
