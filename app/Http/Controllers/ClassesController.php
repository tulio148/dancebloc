<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Classes;
use Illuminate\Http\Request;
use App\Services\ClassesService;
use App\Http\Controllers\Controller;

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
        $user = auth()->user();
        $student = $user->student;
        $enrolled_classes = $student->classes;
        return Inertia::render('Classes/Show', [
            'class_' => $class,
            'enrolled_classes' => $enrolled_classes
        ]);
    }

    public function store(Request $request)
    {
        app(ClassesService::class)->store($request);
        return back()->with('success', 'Class created successfully')->with('status', 200);
    }


    public function update(Request $request)
    {
        app(ClassesService::class)->update($request);
        return back()->with('success', 'Class updated successfully')->with('status', 200);
    }

    public function destroy(Classes $class)
    {
        app(ClassesService::class)->destroy($class);
        return redirect()->route('admin')->with('message', 'Class deleted successfully')->with('status', 200);
    }
}
