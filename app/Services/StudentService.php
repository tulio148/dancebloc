<?php

namespace App\Services;

use App\Models\Orders;
use App\Models\Student;
use Square\SquareClient;
use Illuminate\Http\Request;
use Square\Models\CreateCustomerRequest;

class StudentService
{

    public function index($student)
    {
        $client = app(SquareClient::class);
        $api_response = $client->getCustomersApi()->retrieveCustomer($student->id);
        if ($api_response->isSuccess()) {
            $result = $api_response->getResult();
            return $result;
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }

    public function store($user)
    {
        $client = app(SquareClient::class);
        $body = new CreateCustomerRequest();
        $body->setIdempotencyKey(uniqid());
        $body->setGivenName($user->name);
        $body->setEmailAddress($user->email);

        $api_response = $client->getCustomersApi()->createCustomer($body);

        if ($api_response->isSuccess()) {
            $id = $api_response->getResult()->getCustomer()->getId();
            Student::create(
                [
                    'id' => $id,
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email
                ]
            );
            $user->student_id = $id;
            $user->save();
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }

    public function addClass(Request $request)
    {
        $order_id = $request->input('id');
        $student = auth()->user()->student;
        $order = Orders::find($order_id);
        if ($order) {
            $items = json_decode($order->items_ids, true);
        };
        foreach ($items as $classId) {
            $student->classes()->attach($classId, [
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
