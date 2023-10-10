<?php

namespace App\Services;

use App\Models\Cards;
use App\Models\Orders;
use Square\Models\Card;
use App\Models\Payments;
use Square\Models\Money;
use Square\SquareClient;
use Illuminate\Http\Request;
use Square\Models\CreatePaymentRequest;

class PaymentService
{
    public function pay(Request $request)
    {
        $token = $request->input('token');
        $order_id = $request->input('id');
        $amount = $request->input('amount');
        $cardholder = $request->input('cardholder');
        $storecard = $request->input('storecard');

        $user = auth()->user();
        $student = $user->student;
        $client = app(SquareClient::class);

        $amount_money = new Money();
        $amount_money->setAmount($amount * 100);
        $amount_money->setCurrency('AUD');
        $idempotency_key = uniqid();

        $body = new CreatePaymentRequest($token, $idempotency_key);
        $body->setAmountMoney($amount_money);
        $body->setAutocomplete(true);
        $body->setCustomerId($student->id);
        $body->setOrderId($order_id);
        $body->setLocationId(env('SQUARE_LOCATION_ID'));
        $body->setAcceptPartialAuthorization(false);

        $api_response = $client->getPaymentsApi()->createPayment($body);

        if ($api_response->isSuccess()) {

            $payment_id = $api_response->getResult()->getPayment()->getId();

            Orders::where('id', $order_id)->update(['state' => 'COMPLETED', 'payment_id' => $payment_id]);
            Payments::create(
                [
                    'id' => $payment_id,
                    'order_id' => $order_id,
                    'student_id' => $student->id,
                    'total_money' => $amount
                ]
            );

            if ($storecard == true) {
                $this->save_card($payment_id, $cardholder);
                return "success";
            }

            return "success";
        } else {
            $errors = $api_response->getErrors()[0]->getDetail();
            return $errors;
        }
    }

    public function save_card($payment_id, $cardholder)
    {

        $user = auth()->user();
        $student = $user->student;
        $client = app(SquareClient::class);
        $idempotency_key = uniqid();

        $card = new Card();
        $card->setCustomerId($student->id);
        $card->setCardholderName($cardholder);

        $body = new \Square\Models\CreateCardRequest(
            $idempotency_key,
            $payment_id,
            $card
        );

        $api_response = $client->getCardsApi()->createCard($body);

        if ($api_response->isSuccess()) {
            $result = $api_response->getResult();
            $card_id = $api_response->getResult()->getCard()->getId();
            $brand = $api_response->getResult()->getCard()->getCardBrand();
            $last_4 = $api_response->getResult()->getCard()->getLast4();
            Cards::create(
                [
                    'id' => $card_id,
                    'brand' => $brand,
                    'last_4' => $last_4,
                    'student_id' => $student->id,
                    'cardholder_name' => $cardholder,
                ]
            );
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }
}
