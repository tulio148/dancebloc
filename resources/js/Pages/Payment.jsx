import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

export default function Payment({ auth }) {
    // Function to handle cardTokenizeResponseReceived
    const handlePaymentResponse = (token, verifiedBuyer) => {
        console.log("token:", token);
        console.log("verifiedBuyer:", verifiedBuyer);

        // Check if the token status is 200
        if (token.status === "OK") {
            console.log(token.token);
            router.post("/student/payment", {
                token: token.token,
            });
        } else {
            console.error("Payment token status is not OK");
        }
    };

    return (
        <Modal show={true} onClose={() => {}}>
            {/* <div className="grid justify-center items-center h-screen"> */}
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
    );
}
