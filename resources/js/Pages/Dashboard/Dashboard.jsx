import { useState } from "react";
import { DashboardTabs } from "@/Lib/tabs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TabNav from "@/Components/TabNav";
import Home from "./Home";
import Calendar from "./Calendar";
import Orders from "./Orders";

export default function Dashboard({ auth, student, orders, classes }) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    console.log(orders);
    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />
            <TabNav
                tabs={DashboardTabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
            <div className="sm:pt-24 max-w-7xl mx-auto h-screen">
                {activeTab == 0 && <Home user={auth.user} />}
                {activeTab == 1 && (
                    <Calendar user={auth.user} classes={classes} />
                )}
                {activeTab == 2 && <Orders user={auth.user} orders={orders} />}
            </div>
        </Layout>
    );
}
