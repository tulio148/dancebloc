import { useState } from "react";
import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

export default function Enroll({ id, user }) {
    console.log(user);
    const handlePaymentResponse = (token, verifiedBuyer) => {
        console.log("token:", token);
        console.log("verifiedBuyer:", verifiedBuyer);

        if (token.status === "OK") {
            console.log(token.token);
            router.post("/student/payment", {
                token: token.token,
                id: id,
            });
        } else {
            console.error("Payment token status is not OK");
        }
    };

    const [checkOutIsOpened, setcheckOutIsOpened] = useState(false);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const enroll = () => {
        user ? setcheckOutIsOpened(true) : router.visit("/login");
    };

    const pay = () => {
        setIsEnrolled(true);
    };
    const closeModal = () => {
        setcheckOutIsOpened(false);
    };

    return (
        <>
            <button onClick={enroll}>enroll</button>
            <Modal show={checkOutIsOpened} onClose={closeModal}>
                <h1>test</h1>
                <button onClick={pay}>pay</button>
                {isEnrolled && (
                    <PaymentForm
                        applicationId="sandbox-sq0idb-GNnar5fUY7GP5eZtj1sc3g"
                        cardTokenizeResponseReceived={handlePaymentResponse}
                        locationId="LQ8X13Y7ZQ55H"
                    >
                        <CreditCard />
                    </PaymentForm>
                )}
            </Modal>
        </>
    );
}
