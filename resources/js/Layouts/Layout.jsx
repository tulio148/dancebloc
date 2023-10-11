import { useState, useEffect, useRef } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faArrowRightToBracket,
    faDoorOpen,
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
                <div className=" py-2 px-6 lg:px-8 bg-db-pink z-50">
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
                                <div className="hidden sm:flex gap-8">
                                    <NavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        <FontAwesomeIcon
                                            icon={faDoorOpen}
                                            size="lg"
                                            style={{ color: "#020203" }}
                                        />
                                        Sign Out
                                    </NavLink>
                                </div>
                            ) : (
                                <div className="hidden sm:flex gap-5 ">
                                    <NavLink href={route("login")}>
                                        <FontAwesomeIcon
                                            icon={faArrowRightToBracket}
                                            size="lg"
                                            style={{ color: "#020203" }}
                                        />
                                        Sign in
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
                                    <FontAwesomeIcon
                                        icon={faBars}
                                        size="xl"
                                        style={{ color: "#ffffff" }}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        size="2xl"
                                        style={{ color: "#ffffff" }}
                                    />
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
                            <div className="flex justify-end sm:hidden w-full bg-gradient-to-bl from-white to-db-pink ">
                                <div className="flex flex-col gap-10 my-4 p-6 border-l-2 border-white/60">
                                    {user ? (
                                        <>
                                            {user.admin == 1 && (
                                                <ResponsiveNavLink
                                                    href={route("admin")}
                                                    active={route().current(
                                                        "admin"
                                                    )}
                                                >
                                                    Admin
                                                </ResponsiveNavLink>
                                            )}
                                            <ResponsiveNavLink
                                                href={route("dashboard")}
                                                active={route().current(
                                                    "dashboard"
                                                )}
                                            >
                                                Dashboard
                                            </ResponsiveNavLink>
                                            <ResponsiveNavLink
                                                href={route("profile.edit")}
                                                active={route().current(
                                                    "profile"
                                                )}
                                            >
                                                Profile
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink
                                                method="post"
                                                href={route("logout")}
                                                as="button"
                                            >
                                                Log Out
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
                                                Sign in
                                            </ResponsiveNavLink>
                                        </>
                                    )}
                                    <ResponsiveNavLink
                                        href={route("classes")}
                                        active={route().current("classes")}
                                        s
                                    >
                                        Classes
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </nav>

            <main className="mt-20 bg-gradient-to-b from-db-pink from-10% min-h-screen  ">
                {children}
            </main>
        </div>
    );
}
