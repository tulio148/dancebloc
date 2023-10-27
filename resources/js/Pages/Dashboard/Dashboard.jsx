import { useState } from "react";
import { DashboardTabs } from "@/Lib/tabs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TabNav from "@/Components/TabNav";
import Home from "./Home";
import Calendar from "./Calendar";
import Cart from "./Cart";

export default function Dashboard({
    auth,
    student,
    orders,
    classes,
    enrolled_classes,
}) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />
            <TabNav
                tabs={DashboardTabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
            {activeTab == 0 && <Home user={auth.user} />}
            {activeTab == 1 && (
                <Calendar
                    user={auth.user}
                    enrolled_classes={enrolled_classes}
                />
            )}
            {activeTab == 2 && (
                <Cart user={auth.user} classes={classes} orders={orders} />
            )}
        </Layout>
    );
}
