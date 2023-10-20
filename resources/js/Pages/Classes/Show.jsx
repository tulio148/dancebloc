import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import formatDate from "@/Lib/dateformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faBolt,
    faUser,
    faTag,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Show({ auth, class_ }) {
    return (
        <Layout user={auth.user}>
            <Head title={class_.name} />
            <img src="/example.jpg" alt="alt" className="my-10 shadow-xl" />
            <h1 className="  text-2xl font-semibold tracking-widest text-center text-white">
                {class_.name}
            </h1>

            <div className="flex justify-around max-w-7xl items-center flex-wrap-reverse px-6 w-full">
                <div className=" border-t-2 border-b-2 bg-gradient-to-t  from-db-pink/20 via-db-pink via-50% to-db-pink/20   px-6 py-8 rounded-3xl  mx-2 my-6  max-w-xl max-h-fit shadow-lg">
                    <h3 className="text-white text-xl text-justify leading-9 tracking-wider font-normal ">
                        {class_.description}
                    </h3>
                </div>
                <div className="flex flex-col gap-4  border-b-2 bg-gradient-to-br from-white from-50% max-w-fit px-6 py-8 rounded-3xl  mx-2 my-10 z-40">
                    <p className=" text-base  tracking-wider max-w-fit">
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faCalendar}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span>{formatDate(class_.datetime)}</span>
                    </p>
                    <p className=" text-base  tracking-wider  max-w-fit ">
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faBolt}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span>{class_.level}</span>
                    </p>
                    <p className=" text-base  tracking-wider  max-w-fit">
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faUser}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span>{class_.instructor}</span>
                    </p>
                    <p className=" text-base  tracking-wider max-w-fit">
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span>{class_.location}</span>
                    </p>
                    <p className=" text-base  tracking-widest  max-w-fit">
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faTag}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span>${class_.price}</span>
                    </p>
                    <Link
                        href={route("order.store")}
                        method="post"
                        as="button"
                        type="button"
                        data={{ id: class_.id, name: class_.name }}
                        className=" self-center inline-flex items-center max-w-fit px-10 py-3 mt-6 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-semibold text-xl text-white tracking-widest border border-white hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150 shadow-lg"
                    >
                        enrol
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
