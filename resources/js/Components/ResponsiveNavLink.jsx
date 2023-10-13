import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={` tracking-widest pr-12 pl-3 py-2 text-xl w-fit text-white ${
                active
                    ? "border-2 border-white/60 font-medium rounded-lg"
                    : "hover:text-db-green/75 text-black font-light"
            }  ${className}`}
        >
            {children}
        </Link>
    );
}
