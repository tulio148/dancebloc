import ResponsiveNavLink from "./ResponsiveNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faDoorOpen,
    faUser,
    faUserTie,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function ResponsiveNav({ user }) {
    return (
        <div className="absolute z-50 flex justify-end sm:hidden w-full bg-gradient-to-r from-white/10 to-db-pink to-40% drop-shadow-xl">
            <div className="flex flex-col gap-10 my-4 p-6 z-50">
                {user ? (
                    <>
                        {user.admin == 1 && (
                            <ResponsiveNavLink
                                href={route("admin")}
                                active={route().current("admin")}
                            >
                                <div className="flex items-center gap-5">
                                    {route().current("admin") ? (
                                        <FontAwesomeIcon
                                            icon={faUserTie}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFFF",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faUserTie}
                                            size="lg"
                                            style={{
                                                color: "#5c749d",
                                            }}
                                        />
                                    )}
                                    Admin
                                </div>
                            </ResponsiveNavLink>
                        )}
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            <div className="flex items-center gap-5">
                                {route().current("dashboard") ? (
                                    <FontAwesomeIcon
                                        icon={faCalendarDays}
                                        size="lg"
                                        style={{
                                            color: "#FFFFFFF",
                                        }}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faCalendarDays}
                                        size="lg"
                                        style={{
                                            color: "#5c749d",
                                        }}
                                    />
                                )}
                                Dashboard
                            </div>
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("profile.edit")}
                            active={route().current("profile.edit")}
                        >
                            <div className="flex items-center gap-5">
                                {route().current("profile.edit") ? (
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        size="lg"
                                        style={{
                                            color: "#FFFFFFF",
                                        }}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        size="lg"
                                        style={{
                                            color: "#5c749d",
                                        }}
                                    />
                                )}
                                Account
                            </div>
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                            className="mt-7 border-t border-white/60 pt-5 px-5"
                        >
                            <div className="flex items-start gap-5">
                                Sign Out
                                <FontAwesomeIcon
                                    icon={faDoorOpen}
                                    size="lg"
                                    style={{
                                        color: "#FFFFFF",
                                    }}
                                />
                            </div>
                        </ResponsiveNavLink>
                    </>
                ) : (
                    <>
                        <ResponsiveNavLink
                            href={route("login")}
                            active={route().current("login")}
                        >
                            <div className="flex items-center gap-5">
                                Sign in
                                <FontAwesomeIcon
                                    icon={faArrowRightToBracket}
                                    size="lg"
                                    style={{
                                        color: "#FFFFFFF",
                                    }}
                                />
                            </div>
                        </ResponsiveNavLink>
                    </>
                )}
                {/* <ResponsiveNavLink
                href={route("classes")}
                active={route().current("classes")}
            >
                Classes
            </ResponsiveNavLink> */}
            </div>
        </div>
    );
}
