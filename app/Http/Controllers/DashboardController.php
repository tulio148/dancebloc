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
        $student = $user->student;
        $orders =  $student->orders ?? [];
        $classes = $student->classes ?? [];

        return Inertia::render('Dashboard/Dashboard', [
            'student' => $student,
            'orders' => $orders,
            'classes' => $classes
        ]);
    }
}
