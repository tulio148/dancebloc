import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
export default function Enroll({ auth, class_ }) {
    return (
        <Layout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <p>{class_.name}</p>
            <p>{class_.description}</p>
            <Link
                href={route("order.store")}
                method="post"
                as="button"
                type="button"
                data={{ id: class_.id, name: class_.name }}
            >
                enroll
            </Link>
        </Layout>
    );
}
