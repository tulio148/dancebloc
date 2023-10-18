import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Show({ auth, class_ }) {
    return (
        <Layout user={auth.user}>
            <div>
                <img src="/example.jpg" alt="alt" className="my-10 shadow-xl" />
                <h1 className="text-2xl font-bold">{class_.name}</h1>
                <Link
                    href={route("order.store")}
                    method="post"
                    as="button"
                    type="button"
                    data={{ id: class_.id, name: class_.name }}
                >
                    enroll
                </Link>
            </div>
        </Layout>
    );
}
