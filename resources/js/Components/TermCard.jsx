import { Link } from "@inertiajs/react";
import { formatDate } from "@/Lib/dateformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function ClassCard({ term }) {
    const startDate = formatDate(term.start_date);
    const endDate = formatDate(term.end_date);

    return (
        <div
            className="flex flex-col gap-2 max-w-lg border-b bg-gradient-to-b from-white from-90% lg:min-w-[700px] sm:min-w-[500px] min-w-[320px] px-6 pt-10 pb-6 rounded-3xl  z-40 shadow
        "
        >
            <h2 className="max-w-fit text-xl font-normal text-slate-800 tracking-widest ">
                {term.name}
            </h2>
            <div className="border-t border-1 border-black/10"></div>
            <div className="flex flex-col flex-wrap gap-3 mt-4 ">
                <p className="text-xl  text-slate-600">
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faCalendar}
                            size="lg"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span>
                        {startDate} - {endDate}
                    </span>
                </p>
                <div>
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faBolt}
                            size="xl"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span className="max-w-fit text-xl  text-slate-600">
                        {term.level}
                    </span>
                </div>
            </div>

            <p className=" text-slate-600 text-base text-justify tracking-wider leading-7 whitespace-normal py-5">
                {term.description}
            </p>
            <Link
                href={route("classes.show", term.name)}
                className=" self-center inline-flex items-center max-w-fit px-10 py-4 mt-6 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-2xl text-white tracking-widest  hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150 "
            >
                learn more
            </Link>
        </div>
    );
}
