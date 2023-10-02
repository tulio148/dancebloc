import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Payment from "./Partials/Payment";
import TabNav from "@/Components/TabNav";
import { useState } from "react";

export default function Dashboard({ auth, orders, classes }) {
    const tabs = [
        {
            label: "My Classes",
        },
        {
            label: "Another one",
        },
        {
            label: "Orders",
        },
    ];

    const [activeTab, setActiveTab] = useState(-1);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />
            <TabNav
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
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
