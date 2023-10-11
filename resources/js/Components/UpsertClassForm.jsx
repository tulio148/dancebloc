import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function UpsertClass({ initialData }) {
    const formattedDatetime = formatDatetime(initialData?.datetime);

    const { data, setData, post, processing, errors, reset } = useForm({
        id: initialData?.id || "",
        name: initialData?.name || "",
        datetime: formattedDatetime ? formattedDatetime : "",
        description: initialData?.description || "",
        style: initialData?.style || "",
        level: initialData?.level || "",
        instructor: initialData?.instructor || "",
        enrollment_mode: initialData?.enrollment_mode || "",
        location: initialData?.location || "",
        price: initialData?.price || "",
        version: initialData?.version || "",
        stupid_square_name: initialData?.stupid_square_name || "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        initialData ? post(route("class.update")) : post(route("class.store"));
    };

    return (
        <form onSubmit={submit}>
            <div className="flex flex-col gap-8 p-3">
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    placeholder="Title"
                />
                <InputError message={errors.name} className="mt-2" />
                <TextInput
                    id="datetime"
                    type="datetime-local"
                    name="datetime"
                    value={data.datetime}
                    className="mt-1 block w-full"
                    autoComplete="datetime"
                    onChange={(e) => setData("datetime", e.target.value)}
                    required
                />
                <InputError message={errors.datetime} className="mt-2" />
                <TextInput
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    autoComplete="description"
                    onChange={(e) => setData("description", e.target.value)}
                    placeholder="Description"
                    required
                />
                <InputError message={errors.description} className="mt-2" />
                <SelectInput
                    options={["", "beginner", "advanced"]}
                    className="mt-1 block w-full"
                    value={data.level}
                    onChange={(e) => {
                        setData("level", e.target.value);
                    }}
                    required
                    placeholder="Level"
                />
                <SelectInput
                    options={["", "samba", "other"]}
                    className="mt-1 block w-full"
                    value={data.style}
                    onChange={(e) => {
                        setData("style", e.target.value);
                    }}
                    required
                    placeholder="Style"
                />
                <SelectInput
                    options={["", "Jane Doe", "That One"]}
                    className="mt-1 block w-full"
                    value={data.instructor}
                    onChange={(e) => {
                        setData("instructor", e.target.value);
                    }}
                    required
                    placeholder="Instructor"
                />
                <SelectInput
                    options={["", "single", "term"]}
                    className="mt-1 block w-full"
                    value={data.enrollment_mode}
                    onChange={(e) => {
                        setData("enrollment_mode", e.target.value);
                    }}
                    required
                    placeholder="Enrollment Mode"
                />
                <SelectInput
                    options={["", "the studio"]}
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
                <PrimaryButton className="" disabled={processing}>
                    Save
                </PrimaryButton>
            </div>
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
