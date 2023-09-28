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
        $classes = $user->student ?  $user->student->classes : [];

        return Inertia::render('Dashboard/Dashboard', [
            'orders' => $orders,
            'classes' => $classes
        ]);
    }
}
