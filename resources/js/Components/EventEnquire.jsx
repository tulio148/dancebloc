import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Textarea from "./Textarea";

export default function EventEnquire({
    initialData,
    closeCreateModal,
    closeUpdateModal,
}) {
    const formattedDatetime = formatDatetime(initialData?.datetime);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: initialData?.name || "",
        datetime: formattedDatetime ? formattedDatetime : "",
        description: initialData?.description || "",
        style: initialData?.style || "",
        level: initialData?.level || "",
        instructor: initialData?.instructor || "",
        location: initialData?.location || "",
        price: initialData?.price || "",
    });

    const submit = (e) => {
        // e.preventDefault();
        // console.log(data);
        // initialData
        //     ? post(route("class.update"), {
        //           onSuccess: (page) => closeUpdateModal(),
        //       })
        //     : post(route("class.store"), {
        //           onSuccess: (page) => closeCreateModal(),
        //       });
    };

    return (
        <form
            onSubmit={submit}
            className="flex flex-col justify-center items-center gap-3 pb-6"
        >
            <div className="grid sm:grid-cols-2  gap-5 p-4 w-full">
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block sm:col-span-2 "
                    autoComplete="name"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    placeholder="Title"
                />
                <InputError message={errors.name} className="mt-2" />
                <Textarea
                    id="question1"
                    name="question1"
                    value={data.question1}
                    className="mt-1 block w-full sm:col-span-2"
                    autoComplete="question1"
                    onChange={(e) => setData("question1", e.target.value)}
                    placeholder="question1"
                    required
                />
                <InputError message={errors.question1} className="mt-2" />
                <TextInput
                    id="datetime"
                    type="datetime-local"
                    name="datetime"
                    value={data.datetime}
                    className="mt-1 block col-span-1 "
                    autoComplete="datetime"
                    onChange={(e) => setData("datetime", e.target.value)}
                    required
                />
                <InputError message={errors.datetime} className="mt-2" />
                <SelectInput
                    options={[
                        "",
                        "Open",
                        "Beginner",
                        "Intermediate",
                        "Advanced",
                        "Fundamentals",
                        "Improvers",
                    ]}
                    className="mt-1 block w-full"
                    value={data.level}
                    onChange={(e) => {
                        setData("level", e.target.value);
                    }}
                    required
                    placeholder="Level"
                />
                <SelectInput
                    options={["", "Samba", "Funk"]}
                    className="mt-1 block w-full"
                    value={data.style}
                    onChange={(e) => {
                        setData("style", e.target.value);
                    }}
                    required
                    placeholder="Style"
                />
                <SelectInput
                    options={["", "Lauren", "That One"]}
                    className="mt-1 block w-full"
                    value={data.instructor}
                    onChange={(e) => {
                        setData("instructor", e.target.value);
                    }}
                    required
                    placeholder="Instructor"
                />

                <SelectInput
                    options={["", "ICON Dance Studio"]}
                    className="mt-1 block w-full"
                    value={data.location}
                    onChange={(e) => {
                        setData("location", e.target.value);
                    }}
                    required
                    placeholder="Location"
                />

                <TextInput
                    id="price"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    autoComplete="price"
                    onChange={(e) => setData("price", e.target.value)}
                    required
                    placeholder="Price"
                />
                <InputError message={errors.price} className="mt-2" />
            </div>
            <PrimaryButton className="" disabled={processing}>
                Send
            </PrimaryButton>
        </form>
    );
}

const formatDatetime = (date) => {
    if (!date) {
        return;
    }
    const parsedDatetime = new Date(date);
    const year = parsedDatetime.getFullYear();
    const month = (parsedDatetime.getMonth() + 1).toString().padStart(2, "0");
    const day = parsedDatetime.getDate().toString().padStart(2, "0");
    const hour = parsedDatetime.getHours().toString().padStart(2, "0");
    const minute = parsedDatetime.getMinutes().toString().padStart(2, "0");
    const formattedDatetime = `${year}-${month}-${day}T${hour}:${minute}`;
    return formattedDatetime;
};
