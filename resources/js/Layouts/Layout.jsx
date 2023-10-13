import { useState, useEffect, useRef } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "@/Components/Dropdown";
import {
    faBars,
    faXmark,
    faArrowRightToBracket,
    faDoorOpen,
    faUser,
    faUserTie,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function ({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowingNavigationDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <nav className="w-full fixed top-0 left-0 ">
                <div className="py-2 px-6 lg:px-8 bg-db-pink ">
                    <div className="max-w-7xl mx-auto flex justify-between h-16">
                        <div className="flex justify-between items-center w-full">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="gap-8 hidden sm:flex">
                                {user && (
                                    <>
                                        {user.admin == 1 && (
                                            <NavLink
                                                href={route("admin")}
                                                active={route().current(
                                                    "admin"
                                                )}
                                            >
                                                Admin
                                            </NavLink>
                                        )}
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Dashboard
                                        </NavLink>
                                        <NavLink
                                            href={route("profile.edit")}
                                            active={route().current("profile")}
                                        >
                                            Profile
                                        </NavLink>
                                    </>
                                )}
                                <NavLink
                                    href={route("classes")}
                                    active={route().current("classes")}
                                >
                                    Classes
                                </NavLink>
                            </div>
                            {user ? (
                                <div className="hidden sm:flex items-end gap-8">
                                    <NavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        <div className="flex items-center gap-2 ">
                                            Sign Out
                                            <FontAwesomeIcon
                                                icon={faDoorOpen}
                                                size="md"
                                                style={{ color: "#FFFFFF" }}
                                            />
                                        </div>
                                    </NavLink>
                                </div>
                            ) : (
                                <div className="hidden sm:flex gap-5 ">
                                    <NavLink href={route("login")}>
                                        <div className="flex items-center gap-2">
                                            Sign in
                                            <FontAwesomeIcon
                                                icon={faArrowRightToBracket}
                                                size="lg"
                                                style={{ color: "#FFFFFF" }}
                                            />
                                        </div>
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center sm:hidden">
                            <button
                                ref={buttonRef}
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 "
                            >
                                {!showingNavigationDropdown ? (
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faBars}
                                            size="xl"
                                            style={{ color: "#FFFFFF" }}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            size="2xl"
                                            style={{ color: "##FFFFFF" }}
                                        />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={dropdownRef}>
                    <Transition
                        show={showingNavigationDropdown}
                        enter="transition-transform duration-700"
                        enterFrom="transform translate-x-[-100%]"
                        enterTo="transform translate-x-0"
                        leave="transition-transform duration-200"
                        leaveFrom="transform translate-x-0"
                        leaveTo="transform translate-x-[100%]"
                    >
                        {() => (
                            <div className="absolute z-50 flex justify-end sm:hidden w-full bg-gradient-to-r from-white/10 to-db-pink to-50% drop-shadow-xl ">
                                <div className="flex flex-col gap-10 my-4 p-6 z-50">
                                    {user ? (
                                        <>
                                            {user.admin == 1 && (
                                                <ResponsiveNavLink
                                                    href={route("admin")}
                                                    active={route().current(
                                                        "admin"
                                                    )}
                                                >
                                                    <div className="flex items-center gap-5">
                                                        {route().current(
                                                            "admin"
                                                        ) ? (
                                                            <FontAwesomeIcon
                                                                icon={faUserTie}
                                                                size="md"
                                                                style={{
                                                                    color: "#FFFFFFF",
                                                                }}
                                                            />
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={faUserTie}
                                                                size="md"
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
                                                active={route().current(
                                                    "dashboard"
                                                )}
                                            >
                                                <div className="flex items-center gap-5">
                                                    {route().current(
                                                        "dashboard"
                                                    ) ? (
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faCalendarDays
                                                            }
                                                            size="md"
                                                            style={{
                                                                color: "#FFFFFFF",
                                                            }}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faCalendarDays
                                                            }
                                                            size="md"
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
                                                active={route().current(
                                                    "profile.edit"
                                                )}
                                            >
                                                <div className="flex items-center gap-5">
                                                    {route().current(
                                                        "profile.edit"
                                                    ) ? (
                                                        <FontAwesomeIcon
                                                            icon={faUser}
                                                            size="md"
                                                            style={{
                                                                color: "#FFFFFFF",
                                                            }}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={faUser}
                                                            size="md"
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
                                                className="mt-7 border-t border-gray-200 pt-5 pr-5"
                                            >
                                                <div className="flex items-start gap-5">
                                                    Sign Out
                                                    <FontAwesomeIcon
                                                        icon={faDoorOpen}
                                                        size="md"
                                                        style={{
                                                            color: "#5c749d",
                                                        }}
                                                    />
                                                </div>
                                            </ResponsiveNavLink>
                                        </>
                                    ) : (
                                        <>
                                            <ResponsiveNavLink
                                                href={route("login")}
                                                active={route().current(
                                                    "login"
                                                )}
                                            >
                                                <div className="flex items-center gap-5">
                                                    Sign in
                                                    <FontAwesomeIcon
                                                        icon={
                                                            faArrowRightToBracket
                                                        }
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
                        )}
                    </Transition>
                </div>
            </nav>

            <main className="mt-20 bg-gradient-to-b from-db-pink from-10% min-h-screen">
                {children}
            </main>
        </div>
    );
}
