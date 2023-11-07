import { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { AdminTabs } from "@/Lib/tabs";
import TabNav from "@/Components/TabNav";
import Home from "./Home";
import Classes from "./Classes";
import Settings from "./Settings";
import Students from "./Students";

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
                handleTabChange={handleTabChange}
                className="z-40"
            />
            <div className="sm:pt-32 pt-10 mx-5 max-w-7xl z-30">
                {activeTab === 0 && <Home user={auth.user} />}
                {activeTab === 1 && <Classes classes={classes} />}
                {activeTab === 2 && (
                    <Students students={students} classes={classes} />
                )}
                {activeTab === 3 && <Settings />}
            </div>
        </Layout>
    );
}
