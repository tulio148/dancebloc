import { useState } from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ClassCard from "@/Components/ClassCard";
import SelectInput from "@/Components/SelectInput";
import InputLabel from "@/Components/InputLabel";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Classes({ auth, classes }) {
    const [showFilter, setShowFilter] = useState(false);
    const [style, setStyle] = useState("all");
    const [level, setLevel] = useState("all");
    const [enrollment, setEnrollment] = useState("all");

    const filteredClasses = classes.filter((item) => {
        if (level !== "all" && item.level !== level) return false;
        if (style !== "all" && item.style !== style) return false;
        if (enrollment !== "all" && item.enrollment_mode !== enrollment)
            return false;
        return true;
    });

    return (
        <Layout user={auth.user}>
            <Head title="Classes" />
            <h1 className="lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full tracking-widest text-4xl text-white font-extralight text-right py-5 my-16 ">
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
                    unlock the samba groove
                </Transition>
            </h1>
            <div className=" lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full flex flex-wrap gap-3 mt-8 px-5">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="self-start max-w-fit bg-db-pink text-white font-normal border border-white/70 tracking-wider px-4 py-2 rounded-xl"
                >
                    {showFilter ? "hide filters" : "show filters"}
                </button>
                {style != "all" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setStyle("all")}>
                            <span className="mr-2 text-slate-500">{style}</span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
                {level != "all" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setLevel("all")}>
                            <span className="mr-2 text-slate-500">{level}</span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
                {enrollment != "all" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setEnrollment("all")}>
                            <span className="mr-2 text-slate-500">
                                {enrollment}
                            </span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
            </div>
            {showFilter && (
                <div className="flex flex-wrap justify-between gap-3 py-8 px-4  rounded-3xl sm:top-20  lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full ">
                    <div className="flex flex-col max-w-fit gap-2">
                        <InputLabel className=" text-white font-normal tracking-wider  ">
                            Style
                        </InputLabel>
                        <SelectInput
                            options={["all", "samba"]}
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            className="bg-db-pink text-white font-medium border border-white/70 tracking-wider"
                        />
                    </div>
                    <div className="flex flex-col max-w-fit  gap-2">
                        <InputLabel className="text-white font-normal tracking-wider">
                            Level
                        </InputLabel>
                        <SelectInput
                            options={["all", "beginner", "advanced", "kids"]}
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="bg-db-pink text-white font-medium border border-white/70 tracking-wider"
                        />
                    </div>
                    <div className="flex flex-col max-w-fit  gap-2">
                        <InputLabel className="text-white font-normal tracking-wider">
                            Enrollment
                        </InputLabel>
                        <SelectInput
                            options={["all", "single", "term"]}
                            value={enrollment}
                            onChange={(e) => setEnrollment(e.target.value)}
                            className="bg-db-pink text-white font-medium border border-white/70 tracking-wider"
                        />
                    </div>
                </div>
            )}
            <div className="flex flex-col items-center justify-center gap-16 mt-3">
                {filteredClasses.map((item) => (
                    <div key={item.id}>
                        <ClassCard class_={item} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}
