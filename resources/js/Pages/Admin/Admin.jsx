import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import AdminTabNav from "./AdminTabNav";

export default function Admin({ auth, students, classes }) {
    return (
        <Layout user={auth.user}>
            <Head title="Admin" />
            <AdminTabNav />

            <h2>Classes</h2>
            {classes.map((item) => (
                <div key={item.id} className="col-span-2 sm:col-span-1 border">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            ))}

            <h2>Students</h2>
            {students.map((item) => (
                <div key={item.id} className="col-span-2 sm:col-span-1 border">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
            ))}
        </Layout>
    );
}
