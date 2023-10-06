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
            <div className="pt-24 border max-w-7xl mx-auto h-screen"></div>
        </Layout>
    );
}
