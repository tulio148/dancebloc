import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TabNav from "@/Components/TabNav";
import { useState } from "react";
import Classes from "@/Pages/Admin/Classes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCalendarPlus,
    faCoins,
    faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Admin({ auth, students, classes }) {
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
            label: "Classes",
            icon: (
                <FontAwesomeIcon
                    icon={faCalendarPlus}
                    size="xl"
                    style={{ color: "#5c749d" }}
                />
            ),
        },
        {
            label: "Orders",
            icon: (
                <FontAwesomeIcon
                    icon={faCoins}
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
            <Head title="Admin" />
            <h1 className="italic">w k W K</h1>
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
