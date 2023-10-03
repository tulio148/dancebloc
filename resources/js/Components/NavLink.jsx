import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1text-md font-thin leading-5 tracking-widest transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "text-white  "
                    : " text-black hover:text-gray-700  focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
