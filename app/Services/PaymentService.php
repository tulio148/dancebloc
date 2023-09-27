<?php

namespace App\Services;

use Illuminate\Http\Request;
use Square\Models\CreatePaymentRequest;
use Square\Models\Money;
use Square\SquareClient;

class PaymentService
{
    public function payment(Request $request)
    {
        $token = $request->input('token');
        $id = $request->input('id');
        $amount = $request->input('amount') * 100;
        $user = auth()->user();
        $client = app(SquareClient::class);

        $amount_money = new Money();
        $amount_money->setAmount($amount);
        $amount_money->setCurrency('AUD');
        $idempotency_key = uniqid();

        $body = new CreatePaymentRequest($token, $idempotency_key);
        $body->setAmountMoney($amount_money);
        $body->setAutocomplete(true);
        $body->setCustomerId($user->student_id);
        $body->setOrderId($id);
        $body->setLocationId(env('SQUARE_LOCATION_ID'));
        $body->setAcceptPartialAuthorization(false);

        $api_response = $client->getPaymentsApi()->createPayment($body);
        if ($api_response->isSuccess()) {
            $result = $api_response->getResult();
            return $result; // Payment was successful
        } else {
            $errors = $api_response->getErrors();
            return ['error' => $errors]; // Payment failed
        }
    }
}
