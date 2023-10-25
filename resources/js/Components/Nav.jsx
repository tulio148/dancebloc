import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
export default function Nav({ user }) {
    return (
        <>
            <div className="gap-8 hidden lg:flex">
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
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            href={route("profile.edit")}
                            active={route().current("profile.edit")}
                        >
                            Profile
                        </NavLink>
                    </>
                )}
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
                    href={route("classes")}
                    active={
                        route().current("classes") ||
                        route().current("classes.show")
                    }
                >
                    Mission
                </NavLink>
                <NavLink
                    href={route("classes")}
                    active={
                        route().current("classes") ||
                        route().current("classes.show")
                    }
                >
                    Contact
                </NavLink>
            </div>
            {user ? (
                <div className="hidden lg:flex gap-8">
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
