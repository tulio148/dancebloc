import { Link } from "@inertiajs/react";
export default function Enroll({ class_ }) {
    console.log(class_);

    return (
        <>
            <p>{class_.name}</p>
            <p>{class_.description}</p>
            <Link
                href={route("order.store")}
                method="post"
                data={{ id: class_.id, name: class_.name }}
            >
                enroll
            </Link>
        </>
    );
}
