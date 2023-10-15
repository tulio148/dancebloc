import Layout from "@/Layouts/Layout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const user = auth.user;

    return (
        <Layout user={auth.user}>
            <Head title="Profile" />

            <div className="py-12 max-w-2xl mx-auto">
                <div className="max-w-fit px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow rounded-xl">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>

                    {user.signed_in_with == "email" && (
                        <div className="p-4 sm:p-8 bg-white shadow rounded-xl">
                            <UpdatePasswordForm />
                        </div>
                    )}
                    <div className="p-4 sm:p-8 bg-white shadow rounded-xl">
                        <DeleteUserForm user={user} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
