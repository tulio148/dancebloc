import { Link } from "@inertiajs/react";
import formatDate from "@/Lib/dateformatter";

export default function ClassCard({ class_ }) {
    const date = formatDate(class_.datetime);

    return (
        <Link
            href={route("classes.show", class_.name)}
            className="bg-white max-w-3xl flex flex-wrap justify-center overflow-hidden rounded-xl drop-shadow-2xl mx-8  "
        >
            <div className="w-full md:w-1/2 ">
                <img
                    src="\image.webp"
                    alt="alt"
                    className="w-full max-w-md h-auto object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 px-4 py-8 flex flex-col justify-between gap-5">
                <div className="flex justify-between items-center ">
                    <h2 className="text-lg font-semibold italic">
                        {class_.name}
                    </h2>
                    <p className="text-sm text-gray-500">{class_.level}</p>
                </div>
                <p className="text-gray-600 text-sm text-justify leading-5 overflow-ellipsis overflow-hidden ">
                    {class_.description}
                </p>
                <p className="text-md text-gray-500 place-self-end">{date}</p>
            </div>
        </Link>
    );
}
