import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Payment from "./Partials/Payment";

export default function Dashboard({ auth, orders }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>

                {orders.map((item) => (
                    <div
                        key={item.id}
                        className="col-span-2 sm:col-span-1 border"
                    >
                        <p>{JSON.parse(item.items_names)}</p>
                        <p>{item.order_total}</p>
                        <Payment id={item.id} amount={item.order_total} />
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
