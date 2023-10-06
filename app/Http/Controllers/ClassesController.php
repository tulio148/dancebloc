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


    public function store(Request $request)
    {
        app(ClassesService::class)->store($request);
        return redirect()->route('admin')->with('message', 'Class created successfully')->with('status', 200);
    }


    public function update(Request $request)
    {
        app(ClassesService::class)->update($request);
        return redirect()->route('admin')->with('message', 'Class updated successfully')->with('status', 200);
    }

    public function destroy(Classes $class)
    {
        app(ClassesService::class)->destroy($class);
        return redirect()->route('admin')->with('message', 'Class deleted successfully')->with('status', 200);
    }
}
