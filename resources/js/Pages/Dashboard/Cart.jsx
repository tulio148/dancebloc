import Payment from "./Partials/Payment";
export default function Cart({ user, orders }) {
    return (
        <div className="sm:pt-28 px-5 w-full max-w-2xl flex flex-col items-center">
            <h1 className="w-full tracking-widest text-4xl text-white font-extralight text-right py-10 ">
                open orders
            </h1>

            {orders.map((order) => {
                if (order.state == "OPEN") {
                    return (
                        <div
                            key={order.id}
                            className="flex flex-wrap items-center gap-4 border-b bg-white px-6 py-6  rounded-3xl shadow-md font-light text-2xl text-slate-500"
                        >
                            <h2>{JSON.parse(order.items_names)}</h2>
                            <p>${order.order_total}</p>
                            <Payment order={order} />
                        </div>
                    );
                }
            })}
        </div>
    );
}
