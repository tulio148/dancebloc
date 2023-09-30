<?php

namespace App\Http\Controllers;

use RRule\RRule;
use Inertia\Inertia;
use App\Models\Classes;
use Illuminate\Http\Request;
use App\Services\ClassesService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class ClassesController extends Controller
{

    public function index()
    {
        $classes = [];
        foreach (Classes::all() as $class) {
            $classes[] = $class;
        }

        return Inertia::render('Classes/Classes', [
            'classes' => $classes
        ]);
    }


    public function show(Classes $class)
    {
        return Inertia::render('Classes/Show', [
            'class_' => $class->only(
                'id',
                'name',
                'description'
            )
        ]);
    }

    public function enroll(Classes $class)
    {
        return Inertia::render('Classes/Enroll', [
            'class_' => $class->only(
                'id',
                'name',
                'description'
            )
        ]);
    }

    public function create()
    {
        return Inertia::render('CreateClass');
    }

    public function store(Request $request)
    {
        app(ClassesService::class)->store($request);
        return redirect()->route('dashboard')->with('message', 'Class created successfully')->with('status', 200);
    }
}
