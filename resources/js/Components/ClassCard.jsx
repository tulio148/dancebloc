import { Link } from "@inertiajs/react";
import formatDate from "@/Lib/dateformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function ClassCard({ class_ }) {
    const date = formatDate(class_.datetime);

    return (
        <div
            className="flex flex-col gap-4 max-w-lg border-b-2 bg-gradient-to-b from-white from-80% lg:sm:min-w-[700px] sm:min-w-[500px] min-w-[320px] px-6 py-8 rounded-3xl  mx-3 my-10 z-40 shadow-lg
        "
        >
            <p className="text-xl underline decoration-2 decoration-db-green/80 underline-offset-8 text-slate-600">
                <span className="mr-4">
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size="lg"
                        style={{ color: "#FF00F7" }}
                    />
                </span>
                <span>{date}</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-5">
                <h2 className="max-w-fit text-xl font-medium text-slate-800 tracking-widest ">
                    {class_.name}
                </h2>
                <span className="max-w-fit text-lg border border-db-green/50 px-4 py-2 tracking-wide rounded-full text-slate-500 ">
                    {class_.level}
                </span>
            </div>

            <p className=" text-slate-600 text-base text-justify tracking-wider leading-7 whitespace-normal py-5">
                {class_.description}
            </p>
            <Link
                href={route("classes.show", class_.name)}
                className="self-center w-fit bg-db-green/90 py-4 px-12 mt-2 rounded-xl text-white tracking-widest text-2xl font-medium hover:bg-db-green/70 drop-shadow-xl border-2 border-white"
            >
                Learn More
            </Link>
        </div>
    );
}
