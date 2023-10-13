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
            className={` tracking-widest  py-2  text-2xl w-fit text-white ${
                active
                    ? " border-white/40 font-semibold rounded-lg"
                    : "hover:text-db-green/75 text-black font-light"
            }  ${className}`}
        >
            {children}
        </Link>
    );
}
