import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TabNav from "@/Components/TabNav";
import { useState } from "react";
import Classes from "@/Pages/Admin/Classes";

export default function Admin({ auth, students, classes }) {
    const tabs = [
        {
            label: "Classes",
        },
        {
            label: "Students",
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
            <Head title="Admin" />
            <TabNav
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
            <div className="pt-24 ">
                {activeTab === 0 && <Classes classes={classes} />}
            </div>
        </Layout>
    );
}
