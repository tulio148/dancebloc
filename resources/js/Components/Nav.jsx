import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
export default function Nav({ user }) {
    return (
        <>
            <div className="gap-5 hidden lg:flex">
                <NavLink
                    href={route("mission")}
                    active={route().current("mission")}
                >
                    About
                </NavLink>
                <NavLink
                    href={route("classes")}
                    active={
                        route().current("classes") ||
                        route().current("classes.show")
                    }
                >
                    Classes
                </NavLink>
                <NavLink
                    href={route("events")}
                    active={route().current("events")}
                >
                    Events
                </NavLink>
                <NavLink
                    href={route("contact")}
                    active={route().current("contact")}
                >
                    Contact
                </NavLink>
                {user && (
                    <>
                        {user.admin == 1 && (
                            <NavLink
                                href={route("admin")}
                                active={route().current("admin")}
                            >
                                Admin
                            </NavLink>
                        )}
                    </>
                )}
            </div>
            {user ? (
                <div className="hidden lg:flex items-center gap-8">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        My Dashboard
                    </NavLink>
                    <NavLink method="post" href={route("logout")} as="button">
                        <div className="flex items-start gap-2 py-1 ">
                            Sign Out
                            <FontAwesomeIcon
                                icon={faDoorOpen}
                                size="lg"
                                style={{ color: "#00FFA0" }}
                            />
                        </div>
                    </NavLink>
                </div>
            ) : (
                <div className="hidden lg:flex gap-5 ">
                    <NavLink href={route("login")}>
                        <div className="flex items-center gap-2">
                            Sign in
                            <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                                size="lg"
                                style={{ color: "#00FFA0" }}
                            />
                        </div>
                    </NavLink>
                </div>
            )}
        </>
    );
}
