import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Welcome({ auth }) {
    return (
        <Layout user={auth.user}>
            <Head title="Welcome" />
        </Layout>
    );
}
