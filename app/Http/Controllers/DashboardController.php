<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Terms;
use App\Models\Classes;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $student = $user->student;
        $enrolled_classes = $student->classes ?? collect();
        $sorted_enrolled_classes = $enrolled_classes->sortBy(fn ($item) => $item['datetime'])->values()->all();
        $classes_in_student_orders = [];
        $cards = $student->cards ?? [];
        $orders =  $student->orders ?? [];
        $terms = [];
        foreach (Terms::all() as $term) {
            $terms[] = $term;
        }


        foreach ($orders as $order) {
            $classesIds = json_decode($order->items_ids, true);
            foreach ($classesIds as $class_id) {
                $classInstance = Classes::find($class_id);
                if ($classInstance && !in_array($classInstance, $classes_in_student_orders)) {
                    $classes_in_student_orders[] = $classInstance;
                }
            }
        }

        return Inertia::render('Dashboard/Dashboard', [
            'student' => $student,
            'orders' => $orders,
            'cards' => $cards,
            'terms' => $terms,
            'classes' => $classes_in_student_orders,
            'enrolled_classes' => $sorted_enrolled_classes
        ]);
    }
}
