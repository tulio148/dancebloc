import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCalendarDays,
    faCartShopping,
    faGear,
    faCalendarPlus,
    faCoins,
} from "@fortawesome/free-solid-svg-icons";

export const DashboardTabs = [
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

export const AdminTabs = [
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