import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import { useState } from "react";
import {
    PaymentForm,
    CreditCard,
    GooglePay,
} from "react-square-web-payments-sdk";

export default function Payment({ id, amount }) {
    const appId = import.meta.env.VITE_SQUARE_APPLICATION_ID;
    const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;

    const handlePaymentResponse = (token, verifiedBuyer) => {
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
                <div className="p-6 border h-full">
                    <PaymentForm
                        formProps={{
                            className:
                                "flex flex-col justify-center gap-10 my-auto h-full",
                        }}
                        applicationId={appId}
                        cardTokenizeResponseReceived={handlePaymentResponse}
                        locationId={locationId}
                        createPaymentRequest={() => ({
                            countryCode: "AU",
                            currencyCode: "AUD",
                            // pending is only required if it's true.
                            total: {
                                amount: amount,
                                label: "Total",
                            },
                        })}
                    >
                        <GooglePay buttonColor="white" />

                        <CreditCard
                            buttonProps={{
                                css: {
                                    backgroundColor: "#e75480",
                                    fontSize: "20px",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#FFC0CB",
                                    },
                                    // marginTop: "-12px",
                                    fontWeight: "normal",
                                },
                            }}
                            style={{
                                input: {
                                    fontSize: "14px",
                                },
                                "input::placeholder": {
                                    color: "#771520",
                                },
                            }}
                        />
                    </PaymentForm>
                </div>
            </Modal>
        </>
    );
}
