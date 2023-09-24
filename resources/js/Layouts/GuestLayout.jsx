import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {children}
        </div>
    );
}