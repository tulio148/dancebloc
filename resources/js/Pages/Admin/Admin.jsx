import { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { AdminTabs } from "@/Lib/tabs";
import TabNav from "@/Components/TabNav";
import Home from "./Home";
import Classes from "@/Pages/Admin/Classes";

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
                className="z-50"
            />
            <div className="sm:pt-24 pt-10 mx-5 z-40 max-w-7xl">
                {activeTab === 0 && <Home user={auth.user} />}
                {activeTab === 1 && <Classes classes={classes} />}
            </div>
        </Layout>
    );
}
