import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

export default function Payment({ id, amount }) {
    // Function to handle cardTokenizeResponseReceived
    const handlePaymentResponse = (token, verifiedBuyer) => {
        // console.log("token:", token);
        // console.log("verifiedBuyer:", verifiedBuyer);

        // Check if the token status is 200
        if (token.status === "OK") {
            console.log(token.token);
            router.post("/payment", {
                token: token.token,
                id: id,
                amount: amount,
            });
        } else {
            console.error("Payment token status is not OK");
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>pay </button>
            <Modal show={isOpen} onClose={closeModal}>
                <h1 className="text-3xl font-bold">
                    Please enter your card details
                </h1>
                {/* </div> */}
                <div className="grid justify-center items-center ">
                    <PaymentForm
                        applicationId="sandbox-sq0idb-GNnar5fUY7GP5eZtj1sc3g"
                        cardTokenizeResponseReceived={handlePaymentResponse} // Use the handler function
                        locationId="LQ8X13Y7ZQ55H"
                    >
                        <CreditCard />
                    </PaymentForm>
                </div>
            </Modal>
        </>
    );
}
