import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ClassCard from "@/Components/ClassCard";

export default function Classes({ auth, classes }) {
    return (
        <Layout user={auth.user}>
            <Head title="Classes" />
            <div className="flex flex-col items-center gap-6 my-16 ">
                {classes.map((item) => (
                    <div className="flex flex-col gap-2" key={item.id}>
                        <ClassCard class_={item} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}
