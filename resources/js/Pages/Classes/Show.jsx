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
import { Transition } from "@headlessui/react";

export default function Show({ auth, class_ }) {
    return (
        <Layout user={auth.user}>
            <Head title={class_.name} />

            <h1 className="tracking-widest text-4xl text-white font-extralight text-right py-5 mt-8 relative">
                <Transition
                    show={true}
                    appear={true}
                    enter="transition-opacity ease-linear duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {class_.name}
                </Transition>
            </h1>

            <div className="flex flex-col  gap-4  border-b-2 bg-gradient-to-b from-white/90 from-70%  max-w-fit px-6 py-8 rounded-3xl mx-2 my-10 z-40">
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
            <div className=" border-t border-b border-white/70 bg-gradient-to-t  from-white/20 via-db-pink via-80% to-white/50   px-4 py-6 rounded-3xl  mx-6 my-6  max-w-md max-h-fit shadow-lg">
                <h3 className="text-white text-lg text-justify leading-9 tracking-widest font-normal ">
                    {class_.description}
                </h3>
            </div>
            <div
                className="border-t border-b border-white/50 my-8 mx-2 rounded-3xl shadow-2xl shadow-db-green brightness-105  min-w-[320px] max-w-7xl h-[600px] flex flex-col justify-between bg-no-repeat bg-contain bg-center bg-black"
                style={{ backgroundImage: `url(/fb_img_1663987814675.jpg)` }}
            >
                <h2 className="w-full flex flex-col font-normal tracking-wider text-3xl py-5 gap-2">
                    <span className="text-db-pink ml-1 ">dance</span>

                    <span className="text-white ml-2">with</span>

                    <span className="text-db-green ml-3">passion</span>
                </h2>
                <Link
                    href={route("order.store")}
                    method="post"
                    as="button"
                    type="button"
                    data={{ id: class_.id, name: class_.name }}
                    className="font-bold tracking-wider text-4xl py-5 text-db-pink"
                >
                    join us
                </Link>
            </div>
        </Layout>
    );
}
