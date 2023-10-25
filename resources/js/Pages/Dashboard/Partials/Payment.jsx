import Modal from "@/Components/Modal";
import { useState } from "react";
import {
    PaymentForm,
    CreditCard,
    GooglePay,
} from "react-square-web-payments-sdk";
import axios from "axios";

export default function Payment({ id, amount }) {
    const appId = import.meta.env.VITE_SQUARE_APPLICATION_ID;
    const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;

    const [isOpen, setIsOpen] = useState(false);

    const [paymentStatus, setPaymentStatus] = useState(null);
    const [error, setError] = useState(null);

    const [storeCard, setStoreCard] = useState(false);
    const [cardholderName, setCardholderName] = useState("");

    const closeModal = () => {
        setIsOpen(false);
    };

    const openPaymentForm = () => {
        setIsOpen(true);
    };

    const handleCardStorageChange = (e) => {
        setStoreCard(e.target.checked);
    };

    const handleCardholderNameChange = (e) => {
        setCardholderName(e.target.value);
    };

    const handlePaymentResponse = (token, verifiedBuyer) => {
        // console.log(token.status);
        // if (token.status === "OK") {
        //     console.log(token.token);
        //     router.post("/payment", {
        //         token: token.token,
        //         id: id,
        //         amount: amount,
        //         cardholder: cardholderName,
        //         storecard: storeCard,
        //     });
        // } else {
        // }
        // };
        if (token.status === "OK") {
            console.log(token.token);

            const data = {
                token: token.token,
                id: id,
                amount: amount,
                cardholder: cardholderName,
                storecard: storeCard,
            };

            axios
                .post("/payment", data)
                .then((response) => {
                    console.log(response);
                    if (response.data.status == "success") {
                        setPaymentStatus("success");
                        setTimeout(() => {
                            window.location.href = "/dashboard";
                        }, 2000);
                    } else {
                        setError(response.data.error);
                        setPaymentStatus("error");
                        setTimeout(() => {
                            setPaymentStatus(null);
                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.error("Payment failed:", error);
                });
        } else {
        }
    };

    return (
        <>
            <button onClick={openPaymentForm}>pay </button>
            <Modal show={isOpen} onClose={closeModal} maxWidth="md">
                <div className="p-6 h-full">
                    {paymentStatus === "success" ? (
                        <p>Payment Successful!</p>
                    ) : paymentStatus === "error" ? (
                        <p>
                            Payment Unsuccessful <br />
                            <br /> <strong>{error}</strong>
                        </p>
                    ) : (
                        <>
                            <PaymentForm
                                applicationId={appId}
                                cardTokenizeResponseReceived={
                                    handlePaymentResponse
                                }
                                locationId={locationId}
                                createPaymentRequest={() => ({
                                    countryCode: "AU",
                                    currencyCode: "AUD",
                                    total: {
                                        amount: amount,
                                        label: "Total",
                                    },
                                })}
                            >
                                <GooglePay buttonColor="white" />

                                <CardStorageCheckbox
                                    isChecked={storeCard}
                                    onChange={handleCardStorageChange}
                                    cardholderName={cardholderName}
                                    onCardholderNameChange={
                                        handleCardholderNameChange
                                    }
                                />
                                <CreditCard
                                    buttonProps={{
                                        css: {
                                            backgroundColor: "#FF00F7",
                                            fontSize: "20px",
                                            color: "white",
                                            "&:hover": {
                                                backgroundColor: "#FF80FF",
                                            },
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
                                ></CreditCard>
                            </PaymentForm>
                        </>
                    )}
                </div>
            </Modal>
        </>
    );
}

function CardStorageCheckbox({
    isChecked,
    onChange,
    cardholderName,
    onCardholderNameChange,
}) {
    return (
        <div className="grid grid-cols-2 grid-rows-2 pb-4 pt-10">
            <div className="col-span-2">
                <label
                    htmlFor="cardholderName"
                    className="block font-normal text-gray-700"
                ></label>
                <input
                    type="text"
                    id="cardholderName"
                    name="cardholderName"
                    value={cardholderName}
                    onChange={onCardholderNameChange}
                    placeholder="Cardholder's Name"
                    className="p-2 border border-slate-300 rounded-md w-full"
                />
            </div>

            <div className="col-span-1 "></div>

            <div className="col-span-1 place-self-end">
                <label className="flex gap-2 items-center">
                    Save Card
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChange}
                        className="form-checkbox text-db-pink h-5 w-5"
                    />
                </label>
            </div>
        </div>
    );
}
