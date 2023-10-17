import ResponsiveNavLink from "./ResponsiveNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faDoorOpen,
    faUser,
    faUserTie,
    faCalendarDays,
    faMusic,
    faPhone,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function ResponsiveNav({ user }) {
    console.log(route().current());
    return (
        <div className="absolute z-50 flex justify-end sm:hidden w-full bg-gradient-to-r from-white/10 to-db-pink to-55% drop-shadow-xl">
            <div className="flex flex-col gap-12 my-4 p-6 z-50">
                {user ? (
                    <>
                        <div className="flex flex-col gap-4">
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
                                                    color: "#00FFA0",
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faUserTie}
                                                size="lg"
                                                style={{
                                                    color: "#FFFFFF",
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
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
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
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                    Account
                                </div>
                            </ResponsiveNavLink>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={
                                    route().current("classes") ||
                                    route().current("classes.show")
                                }
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5">
                                    Classes
                                    {route().current("classes") ||
                                    route().current("classes.show") ? (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={route().current("classes")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Mission
                                    {route().current("classes") ? (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={route().current("classes")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Contact
                                    {route().current("classes") ? (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                        </div>

                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                            className="self-end"
                        >
                            <div className="flex items-start gap-3 text-xl tracking-normal mt-10">
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
                                        color: "#00FFA0",
                                    }}
                                />
                            </div>
                        </ResponsiveNavLink>
                        <div className="flex flex-col gap-4">
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={route().current("classes")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Classes
                                    {route().current("classes") ? (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={route().current("classes")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Mission
                                    {route().current("classes") ||
                                    route().current("classes.show", {
                                        class: class_.name,
                                    }) ? (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={route().current("classes.*")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Contact
                                    {route().current("classes.*") ? (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
