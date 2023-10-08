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
            className={`tracking-widest pr-20 pl-2 py-2 text-xl w-fit rounded ${
                active
                    ? "font-bold  bg-db-green/40 text-white"
                    : "font-normal hover:text-db-green/75"
            }  ${className}`}
        >
            {children}
        </Link>
    );
}
