import { Link } from "@inertiajs/react";
export default function Show({ class_ }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">{class_.name}</h1>
            <Link href={route("classes.enroll", class_.id)}>enroll</Link>
        </div>
    );
}
