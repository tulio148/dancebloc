import Payment from "./Partials/Payment";
import { Link } from "@inertiajs/react";
export default function Cart({ user, orders, classes }) {
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
                            className="flex flex-col gap-4 justify-end w-full bg-white px-6 py-6 rounded-3xl shadow-md font-light text-xl text-slate-500"
                        >
                            <div className="flex flex-col gap-5">
                                {JSON.parse(order.items_ids).map(
                                    (id, index, array) => {
                                        const class_ = classes.find(
                                            (classItem) => classItem.id === id
                                        );
                                        const isLastItem =
                                            index === array.length - 1;
                                        const borderClass = isLastItem
                                            ? "flex flex-wrap gap-4 justify-between w-full items-center pb-1"
                                            : "flex flex-wrap gap-4 justify-between w-full items-center border-b pb-1 border-db-pink/30";
                                        return (
                                            <div
                                                key={class_.id}
                                                className={borderClass}
                                            >
                                                <div className="flex gap-5 items-center">
                                                    <p>{class_.name}</p>
                                                    <Link
                                                        href={route(
                                                            "order.delete_class"
                                                        )}
                                                        method="post"
                                                        as="button"
                                                        type="button"
                                                        data={{
                                                            uid: JSON.parse(
                                                                order.items_uid
                                                            )[index],
                                                            order_id: order.id,
                                                        }}
                                                        className="text-sm underline"
                                                    >
                                                        remove
                                                    </Link>
                                                </div>

                                                <p>${class_.price}</p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="flex justify-between border-t-2 border-db-pink/50 pt-2 mt-10">
                                <p>Subtotal</p>
                                <p>${order.order_total}</p>
                            </div>
                            <Payment order={order} />
                        </div>
                    );
                }
            })}
        </div>
    );
}
