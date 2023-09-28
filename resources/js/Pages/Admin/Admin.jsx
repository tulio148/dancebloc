import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, students, classes }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Admin
                </h2>
            }
        >
            <Head title="Admin" />

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
        </AuthenticatedLayout>
    );
}
