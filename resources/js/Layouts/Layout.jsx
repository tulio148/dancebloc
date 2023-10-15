import { useState, useEffect, useRef } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ResponsiveNav from "@/Components/ResponsiveNav";
import Nav from "@/Components/Nav";

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
            <nav className="w-full fixed top-0 left-0 z-50 ">
                <div className="py-2 px-6 lg:px-8 bg-db-pink ">
                    <div className="max-w-7xl mx-auto flex justify-between h-16">
                        <div className="flex justify-between items-center w-full">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <Nav user={user} />
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
                        <ResponsiveNav user={user} />
                    </Transition>
                </div>
            </nav>

            <main className="flex flex-col items-center mt-20 bg-gradient-to-b from-db-pink from-10% min-h-screen">
                {children}
            </main>
        </div>
    );
}
