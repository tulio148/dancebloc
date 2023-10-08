import { Link } from "@inertiajs/react";

export default function ClassCard({ class_ }) {
    const date = new Date(class_.datetime);
    const formattedDate = date.toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const formattedDateTime = `${formattedDate} at ${formattedTime}`;

    return (
        <Link
            href={route("classes.show", class_.name)}
            className="bg-white max-w-7xl sm:w-full mx-auto flex flex-wrap justify-center overflow-hidden  rounded-lg shadow-md shadow-db-green"
        >
            <div className="w-full sm:w-1/2 ">
                <img
                    src="\favicon.jpg"
                    alt="alt"
                    className="w-full max-w-lg h-auto object-cover"
                />
            </div>

            <div className="w-full sm:w-1/2 px-6 py-8 flex flex-col justify-between gap-5">
                <div className="flex justify-between items-center ">
                    <h2 className="text-xl font-semibold italic">
                        {class_.name}
                    </h2>
                    <p className="text-sm text-gray-500">{class_.level}</p>
                </div>
                {/* <div className="grid h-full pt-5 pb-2 gap-2 min-w-sm max-w-xl"> */}
                <p className="text-gray-600 text-justify leading-6 overflow-ellipsis overflow-hidden ">
                    {class_.description}
                </p>
                <p className="text-md text-gray-500 place-self-end">
                    {formattedDateTime}
                </p>
                {/* </div> */}
            </div>
        </Link>
    );
}
