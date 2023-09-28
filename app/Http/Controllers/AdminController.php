<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Orders;
use App\Models\Classes;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Student;

class AdminController extends Controller
{
    public function index()
    {
        $classes = Classes::all();
        $students = Student::all();
        return Inertia::render('Admin/Admin', [
            'classes' => $classes,
            'students' => $students
        ]);
    }
}
