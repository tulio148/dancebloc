import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TabNav from "@/Components/TabNav";
import { AdminTabs } from "@/Lib/tabs";
import { useState } from "react";
import Classes from "@/Pages/Admin/Classes";
import Home from "./Home";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHouse,
//     faCalendarPlus,
//     faCoins,
//     faGear,
// } from "@fortawesome/free-solid-svg-icons";

export default function Admin({ auth, students, classes }) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return (
        <Layout user={auth.user}>
            <Head title="Admin" />
            <TabNav
                tabs={AdminTabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
            <div className="pt-24 ">
                {activeTab === 0 && <Home user={auth.user} />}
                {activeTab === 1 && <Classes classes={classes} />}
            </div>
        </Layout>
    );
}
