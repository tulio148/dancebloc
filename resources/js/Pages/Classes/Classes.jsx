import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Classes({ auth, classes }) {
    console.log(classes);
    return (
        <Layout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Classes
                </h2>
            }
        >
            <Head title="Classes" />
            <div className="border w-3/4 h-3/4 grid grid-cols-2 gap-4 p-8">
                {classes.map((item) => (
                    <Link key={item.id} href={route("classes.show", item.name)}>
                        <div
                            key={item.id}
                            className="col-span-2 sm:col-span-1 border"
                        >
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}
