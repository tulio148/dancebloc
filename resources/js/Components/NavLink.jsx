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
            className={`inline-flex items-center px-3 gap-3 lg:text-md text-md tracking-widest h-fit focus:outline-none  ${
                active
                    ? "text-white font-semibold border-b border-transparent"
                    : " text-slate-800 hover:text-gray-700 hover:border-b border-white/60 focus:text-gray-700 focus:border-gray-300 "
            } 
                
                ${className}`}
        >
            {children}
        </Link>
    );
}
