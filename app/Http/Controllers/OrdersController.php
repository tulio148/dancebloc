<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Orders;
use App\Services\OrdersService;

class OrdersController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $orders = [];
        foreach (Orders::all() as $order) {
            $orders[] = $order;
        }

        return view('orders.index', ['orders' => $orders]);
    }


    public function store(Request $request)
    {
        app(OrdersService::class)->store($request);
        return redirect()->route('dashboard');
    }
}
