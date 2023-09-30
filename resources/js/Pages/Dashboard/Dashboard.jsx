import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Payment from "./Partials/Payment";

export default function Dashboard({ auth, orders, classes }) {
    return (
        <Layout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div>
                <h2>Open Orders</h2>
                {orders.map((item) =>
                    item.state === "OPEN" ? (
                        <div
                            key={item.id}
                            className="col-span-2 sm:col-span-1 border"
                        >
                            <p>{JSON.parse(item.items_names)}</p>
                            <p>{item.order_total}</p>
                            <Payment id={item.id} amount={item.order_total} />
                        </div>
                    ) : null
                )}
            </div>

            <div>
                <h2>Completed Orders</h2>
                {orders.map((item) =>
                    item.state === "COMPLETED" ? (
                        <div
                            key={item.id}
                            className="col-span-2 sm:col-span-1 border"
                        >
                            <p>{JSON.parse(item.items_names)}</p>
                            <p>{item.order_total}</p>
                        </div>
                    ) : null
                )}
            </div>
            <h2>My classes</h2>
            {classes.map((item) => (
                <div key={item.id} className="col-span-2 sm:col-span-1 border">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </Layout>
    );
}
