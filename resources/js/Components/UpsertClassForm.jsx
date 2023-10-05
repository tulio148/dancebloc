import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function UpsertClass({ initialData }) {
    const inputDatetime = initialData?.datetime;
    const parsedDatetime = new Date(inputDatetime);
    const year = parsedDatetime.getFullYear();
    const month = (parsedDatetime.getMonth() + 1).toString().padStart(2, "0");
    const day = parsedDatetime.getDate().toString().padStart(2, "0");
    const hour = parsedDatetime.getHours().toString().padStart(2, "0");
    const minute = parsedDatetime.getMinutes().toString().padStart(2, "0");
    const formattedDatetime = `${year}-${month}-${day}T${hour}:${minute}`;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: initialData?.name || "",
        datetime: formattedDatetime || "",
        description: initialData?.description || "",
        style: initialData?.style || "",
        level: initialData?.level || "",
        instructor: initialData?.instructor || "",
        enrollment_mode: initialData?.enrollment_mode || "",
        location: initialData?.location || "",
        price: initialData?.price || "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("class.store"));
    };

    return (
        <form onSubmit={submit}>
            <div className="flex flex-col gap-2 p-3">
                <InputLabel htmlFor="name" value="Title" />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />
                <InputError message={errors.name} className="mt-2" />
                <InputLabel htmlFor="datetime" value="datetime" />
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
                <InputLabel htmlFor="description" value="description" />
                <TextInput
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    autoComplete="description"
                    onChange={(e) => setData("description", e.target.value)}
                    required
                />
                <InputError message={errors.description} className="mt-2" />

                <InputLabel htmlFor="level" value="Level" />

                <SelectInput
                    options={["", "beginner", "advanced"]}
                    className="mt-1 block w-full"
                    value={data.level}
                    onChange={(e) => {
                        setData("level", e.target.value);
                    }}
                    required
                />
                <InputLabel htmlFor="style" value="style" />
                <SelectInput
                    options={["", "samba", "other"]}
                    className="mt-1 block w-full"
                    value={data.style}
                    onChange={(e) => {
                        setData("style", e.target.value);
                    }}
                    required
                />
                <InputLabel htmlFor="instructor" value="instructor" />
                <SelectInput
                    options={["", "Jane Doe", "That One"]}
                    className="mt-1 block w-full"
                    value={data.instructor}
                    onChange={(e) => {
                        setData("instructor", e.target.value);
                    }}
                    required
                />
                <InputLabel htmlFor="enrollment mode" value="enrollment mode" />
                <SelectInput
                    options={["", "single", "term"]}
                    className="mt-1 block w-full"
                    value={data.enrollment_mode}
                    onChange={(e) => {
                        setData("enrollment_mode", e.target.value);
                    }}
                    required
                />
                <InputLabel htmlFor="location   " value="location " />
                <SelectInput
                    options={["", "the studio"]}
                    className="mt-1 block w-full"
                    value={data.location}
                    onChange={(e) => {
                        setData("location", e.target.value);
                    }}
                    required
                />

                <InputLabel htmlFor="price" value="price" />
                <TextInput
                    id="price"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    autoComplete="price"
                    onChange={(e) => setData("price", e.target.value)}
                    required
                />
                <InputError message={errors.price} className="mt-2" />
                <PrimaryButton className="" disabled={processing}>
                    Save
                </PrimaryButton>
            </div>
        </form>
    );
}
