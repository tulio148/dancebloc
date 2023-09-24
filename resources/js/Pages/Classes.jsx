import { Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";

export default function Classes({ classes }) {
    console.log(classes);
    return (
        <Guest>
            <Head title="Classes" />
            <div className="border w-3/4 h-3/4 grid grid-cols-2 gap-4 p-8">
                {classes.map((item) => (
                    <Link href={`/classes/${item.id}`} key={item.id}>
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
        </Guest>
    );
}
