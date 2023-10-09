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
            className={`tracking-widest pr-20 pl-2 py-2 text-xl w-fit ${
                active
                    ? "border-b border-db-green text-white font-semibold"
                    : "hover:text-db-green/75"
            }  ${className}`}
        >
            {children}
        </Link>
    );
}
