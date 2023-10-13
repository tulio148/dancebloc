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
            className={`inline-flex items-center px-3 gap-3 lg:text-lg text-md tracking-widest h-fit focus:outline-none  ${
                active
                    ? "text-white font-semibold border-b-2 border-transparent"
                    : "text-black hover:text-gray-700 hover:border-b focus:text-gray-700 focus:border-gray-300 "
            } 
                
                ${className}`}
        >
            {children}
        </Link>
    );
}
