import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Show({ auth, class_ }) {
    return (
        <Layout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div>
                <h1 className="text-2xl font-bold">{class_.name}</h1>
                <Link href={route("classes.enroll", class_.name)}>enroll</Link>
            </div>
        </Layout>
    );
}
