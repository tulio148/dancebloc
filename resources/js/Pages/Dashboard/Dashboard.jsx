import Layout from "@/Layouts/Layout";
import Home from "./Home";
import { Head } from "@inertiajs/react";
import TabNav from "@/Components/TabNav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCalendarDays,
    faCartShopping,
    faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard({ auth, orders, classes }) {
    const tabs = [
        {
            label: "Home",
            icon: (
                <FontAwesomeIcon
                    icon={faHouse}
                    size="xl"
                    style={{ color: "#5c749d" }}
                />
            ),
        },
        {
            label: "My Classes",
            icon: (
                <FontAwesomeIcon
                    icon={faCalendarDays}
                    size="xl"
                    style={{ color: "#5c749d" }}
                />
            ),
        },
        {
            label: "Orders",
            icon: (
                <FontAwesomeIcon
                    icon={faCartShopping}
                    size="xl"
                    style={{ color: "#5c749d" }}
                />
            ),
        },
        {
            label: "Settings",
            icon: (
                <FontAwesomeIcon
                    icon={faGear}
                    size="xl"
                    style={{ color: "#5c749d" }}
                />
            ),
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
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
            <div className="sm:pt-24 max-w-7xl mx-auto h-screen">
                <Home user={auth.user} />
            </div>
        </Layout>
    );
}
