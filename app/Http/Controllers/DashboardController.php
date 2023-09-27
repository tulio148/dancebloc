<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $orders = $user->student ?  $user->student->orders : [];

        return Inertia::render('Dashboard/Index', [
            'orders' => $orders
        ]);
    }
}
