import { useState, useEffect, useRef } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function ({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
                //  &&
                // !buttonRef.current.contains(event.target)
            ) {
                // Clicked outside the dropdown, so close it
                setShowingNavigationDropdown(false);
            }
        }

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <nav className="w-full fixed top-0 left-0 ">
                <div className=" px-4 sm:px-6 lg:px-8 bg-db-pink z-50">
                    <div className="max-w-7xl mx-auto flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            {user && (
                                <>
                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </div>
                                    {user.admin == 1 && (
                                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                            <NavLink
                                                href={route("admin")}
                                                active={route().current(
                                                    "admin"
                                                )}
                                            >
                                                Admin
                                            </NavLink>
                                        </div>
                                    )}
                                </>
                            )}

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("classes")}
                                    active={route().current("classes")}
                                >
                                    Classes
                                </NavLink>
                            </div>
                        </div>

                        {user ? (
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md border">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        ) : (
                            <div className="flex">
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <Link
                                        href={route("register")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <Link
                                        href={route("login")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                ref={buttonRef}
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500  focus:outline-none  focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6 "
                                    stroke="white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={dropdownRef}>
                    <Transition
                        show={showingNavigationDropdown}
                        enter="transition-transform duration-700"
                        enterFrom="transform translate-x-[100%]"
                        enterTo="transform translate-x-0"
                        leave="transition-transform duration-200"
                        leaveFrom="transform translate-x-0"
                        leaveTo="transform translate-x-[100%]"
                    >
                        {() => (
                            <div
                                className={`sm:hidden bg-db-light-pink ${
                                    route().current("admin") ||
                                    route().current("dashboard")
                                        ? "mt-14"
                                        : ""
                                }`}
                            >
                                <div className="flex flex-col gap-5 py-8">
                                    <div className="">
                                        <ResponsiveNavLink
                                            href={route("classes")}
                                            active={route().current("classes")}
                                        >
                                            Classes
                                        </ResponsiveNavLink>
                                    </div>
                                    {!user && (
                                        <>
                                            <div className="pt-4 pb-1 border-t border-gray-200">
                                                <ResponsiveNavLink
                                                    href={route("login")}
                                                    active={route().current(
                                                        "login"
                                                    )}
                                                >
                                                    Log in
                                                </ResponsiveNavLink>
                                            </div>
                                            <div className="pb-1 border-gray-200">
                                                <ResponsiveNavLink
                                                    href={route("register")}
                                                    active={route().current(
                                                        "register"
                                                    )}
                                                >
                                                    Sign up
                                                </ResponsiveNavLink>
                                            </div>
                                        </>
                                    )}
                                    {user ? (
                                        <>
                                            {user.admin == 1 && (
                                                <div className="">
                                                    <ResponsiveNavLink
                                                        href={route("admin")}
                                                        active={route().current(
                                                            "admin"
                                                        )}
                                                    >
                                                        Admin
                                                    </ResponsiveNavLink>
                                                </div>
                                            )}
                                            <div className="">
                                                <ResponsiveNavLink
                                                    href={route("dashboard")}
                                                    active={route().current(
                                                        "dashboard"
                                                    )}
                                                >
                                                    Dashboard
                                                </ResponsiveNavLink>
                                            </div>

                                            <div className="border-t border-gray-200">
                                                <div className="mt-3 space-y-1">
                                                    <ResponsiveNavLink
                                                        href={route(
                                                            "profile.edit"
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
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </nav>

            <main className="mt-16 bg-gradient-to-b from-db-pink min-h-screen  ">
                {children}
            </main>
        </div>
    );
}
