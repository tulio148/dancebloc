import { useState } from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ClassCard from "@/Components/ClassCard";
import SelectInput from "@/Components/SelectInput";
import InputLabel from "@/Components/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";

export default function Classes({ auth, classes, terms }) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to("#top-header", {
            duration: 2,
            delay: 1,
            text: {
                value: "unlock the samba groove",
            },
            ease: "power1.out",
        });
    });

    const [showFilter, setShowFilter] = useState(false);
    const [style, setStyle] = useState("");
    const [level, setLevel] = useState("");
    const [enrollment, setEnrollment] = useState("");

    console.log(terms);
    console.log(classes);

    const filteredClasses = classes.filter((item) => {
        if (level !== "" && item.level !== level) return false;
        if (style !== "" && item.style !== style) return false;
        return true;
    });

    return (
        <Layout user={auth.user}>
            <Head title="Classes" />
            <div className="flex items-end bg-[url('/classes.webp')] bg-cover bg-top mt-16 h-screen w-full lg:bg-top">
                <div
                    id="top-header"
                    className="mx-7 rounded-lg text-white font-thin h-24 bg-db-pink/80 text-5xl md:text-7xl px-1 mb-32"
                ></div>
            </div>
            <div className=" lg:min-w-[700px] sm:min-w-[500px] min-w-full flex flex-wrap gap-3 mt-8 px-5">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="self-start max-w-fit bg-db-pink text-white font-normal border border-white/70 tracking-wider px-4 py-2 rounded-xl"
                >
                    {showFilter ? "hide filters" : "show filters"}
                </button>
                {style != "" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setStyle("")}>
                            <span className="mr-2 text-slate-500">{style}</span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
                {level != "" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setLevel("")}>
                            <span className="mr-2 text-slate-500">{level}</span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
                {enrollment != "" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setEnrollment("")}>
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
                            options={["", "Samba"]}
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
                            options={[
                                "",
                                "Open",
                                "Beginner",
                                "Intermediate",
                                "Advanced",
                            ]}
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
                            options={["", "Casual", "Term"]}
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
