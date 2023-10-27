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
        $openOrder = Orders::where('state', 'OPEN')->first();
        if ($openOrder) {
            app(OrdersService::class)->update($openOrder, $request);
            return redirect()->route('dashboard');
        } else {
            app(OrdersService::class)->create($request);
            return redirect()->route('dashboard');
        }
    }

    public function delete_class(Request $request)
    {
        $order = Orders::find($request->order_id);
        app(OrdersService::class)->delete($order, $request);
    }
}
