import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Textarea from "@/Components/Textarea";
import { Transition } from "@headlessui/react";
export default function Contact({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        subject: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contact.submit"));
    };
    return (
        <Layout user={auth.user}>
            <Transition
                show={true}
                appear={true}
                enter="transition-opacity ease-linear duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="lg:min-w-[700px] sm:min-w-[500px] min-w-full flex justify-end"
            >
                <h1 className="max-w-md tracking-widest text-5xl text-white font-thin text-right py-5 my-16 ">
                    contact us
                </h1>
            </Transition>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 w-full max-w-lg p-4"
            >
                <TextInput
                    label="Name"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    placeholder="Name"
                />
                <TextInput
                    label="Email"
                    id="email"
                    name="email"
                    value={data.email}
                    type="email"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    placeholder="Email"
                />
                <TextInput
                    label="Subject"
                    id="subject"
                    name="subject"
                    value={data.subject}
                    onChange={(e) => setData("subject", e.target.value)}
                    required
                    placeholder="Subject"
                />
                <Textarea
                    label="Content"
                    id="content"
                    name="content"
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    required
                    className="h-40"
                />
                <PrimaryButton
                    className=" justify-center w-fit m-auto"
                    disabled={processing}
                >
                    Send Message
                </PrimaryButton>
                {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                )}
            </form>
        </Layout>
    );
}
