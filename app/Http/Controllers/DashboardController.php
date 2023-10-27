<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Classes;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $student = $user->student;
        $orders =  $student->orders ?? [];
        $enrolled_classes = $student->classes ?? [];
        $classes = Classes::all();

        return Inertia::render('Dashboard/Dashboard', [
            'student' => $student,
            'orders' => $orders,
            'classes' => $classes,
            'enrolled_classes' => $enrolled_classes
        ]);
    }
}
