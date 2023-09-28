<?php

namespace App\Services;

use App\Models\Orders;
use Square\Models\Order;
use Square\SquareClient;
use Square\Models\OrderSource;
use App\Services\StudentService;
use Square\Models\OrderLineItem;
use Square\Models\CreateOrderRequest;

class OrdersService
{
    public function store($request)
    {
        $id = $request->id;
        $name = $request->name;
        $items = [$id];
        $items_names = [$name];
        $orderLineItems = [];

        foreach ($items as $item) {
            $orderLineItem = new OrderLineItem(1);
            $orderLineItem->setCatalogObjectId($item);
            $orderLineItem->setItemType('ITEM');
            $orderLineItems[] = $orderLineItem;
        }

        $client = app(SquareClient::class);
        $user = auth()->user();
        if (!$user->student_id) {
            app(StudentService::class)->store($user);
        }
        $student_id = auth()->user()->student_id;
        $idempotency_key = uniqid();
        $source = new OrderSource();


        $line_items = $orderLineItems;
        $order = new Order(env('SQUARE_LOCATION_ID'));
        $order->setSource($source);
        $order->setCustomerId($student_id);
        $order->setLineItems($line_items);

        $body = new CreateOrderRequest();
        $body->setOrder($order);
        $body->setIdempotencyKey($idempotency_key);

        $api_response = $client->getOrdersApi()->createOrder($body);

        if ($api_response->isSuccess()) {
            $total_money = $api_response->getResult()->getOrder()->getTotalMoney()->getAmount() / 100;
            $order_id = $api_response->getResult()->getOrder()->getId();
            Orders::create(
                [
                    'id' => $order_id,
                    'student_id' => $student_id,
                    'items' => json_encode($items),
                    'items_names' => json_encode($items_names),
                    'order_total' => $total_money
                ]
            );
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }
}
