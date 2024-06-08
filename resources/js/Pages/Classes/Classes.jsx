import { useState } from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ClassCard from "@/Components/ClassCard";
import TermCard from "@/Components/TermCard";
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
        gsap.to("#top-header1", {
            duration: 1.2,
            delay: 1,
            text: {
                value: "unlock the",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.2,
            delay: 2,
            text: {
                value: "samba groove",
            },
            ease: "power4.out",
        });

        gsap.to("#header", {
            scrollTrigger: {
                id: "header",
                trigger: "#header",
                start: "top center",
                toggleActions: "play none restart reverse",
            },
            text: {
                value: "Classes",
                // speed: 1.5,
            },
        });
    });

    const groupClassesByTerm = (terms, classes) => {
        return terms.map((term) => {
            return {
                ...term,
                classes: classes.filter((cls) => cls.term_id === term.id),
            };
        });
    };

    const groupedData = groupClassesByTerm(terms, classes);
    // const [showFilter, setShowFilter] = useState(false);
    // const [style, setStyle] = useState("");
    // const [level, setLevel] = useState("");

    console.log(groupedData);

    // const filteredClasses = classes.filter((item) => {
    //     if (level !== "" && item.level !== level) return false;
    //     if (style !== "" && item.style !== style) return false;
    //     return true;
    // });

    return (
        <Layout user={auth.user}>
            <Head title="Classes" />

            <div className="flex items-end bg-[url('/classes.webp')] bg-cover bg-top mt-16 mb-[500px] h-screen w-full lg:bg-top">
                <div>
                    <div
                        id="top-header1"
                        className="mx-7 text-white font-thin h-14 sm:h-20 bg-db-pink text-5xl md:text-7xl text-right"
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-5xl md:text-7xl  mb-32"
                    ></div>
                </div>
            </div>
            <div className=" flex bg-db-pink  w-full justify-center min-h-[80px] md:h-[100px]  ">
                <div
                    id="header"
                    className="lg:min-w-[700px] sm:min-w-[500px] min-w-[350px] rounded-xl text-white font-thin tracking-widest text-7xl md:text-8xl sm:mb-1  "
                ></div>
            </div>
            {/* <div className=" lg:min-w-[700px] sm:min-w-[500px] min-w-full flex flex-wrap gap-3 mt-8 px-5">
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
            </div>
            {showFilter && (
                <div className="flex flex-wrap justify-between gap-3 py-8 px-12 rounded-3xl sm:top-20  lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full ">
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
                </div>
            )} */}
            <div className="flex flex-wrap justify-center gap-8 py-8 px-12 ">
                {groupedData.map((term) => (
                    <div key={term.id}>
                        <TermCard term={term} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}
