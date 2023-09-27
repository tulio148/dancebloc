<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PaymentService;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        app(PaymentService::class)->payment($request);
    }
}
