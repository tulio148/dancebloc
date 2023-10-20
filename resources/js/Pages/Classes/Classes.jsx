import { useState } from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ClassCard from "@/Components/ClassCard";
import SelectInput from "@/Components/SelectInput";
import InputLabel from "@/Components/InputLabel";

export default function Classes({ auth, classes }) {
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
            <div className="flex gap-3 justify-center py-4 px-4 bg-db-pink rounded-3xlmx-2 sm:top-20  lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full ">
                <div className="flex flex-col max-w-fit px gap-3">
                    <InputLabel className=" text-white font-s tracking-wider pl-3  ">
                        Style
                    </InputLabel>
                    <SelectInput
                        options={["all", "samba"]}
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        className="bg-db-pink text-white font-semibold border-2 border-white tracking-wider"
                    />
                </div>
                <div className="flex flex-col max-w-fit  gap-3">
                    <InputLabel className="text-white font-bold tracking-wider pl-3  ">
                        Level
                    </InputLabel>
                    <SelectInput
                        options={["all", "beginner", "advanced", "kids"]}
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="bg-db-pink text-white font-semibold border-2 border-white tracking-wider"
                    />
                </div>
                <div className="flex flex-col max-w-fit  gap-3">
                    <InputLabel className="text-white font-bold tracking-wider pl-3  ">
                        Enrollment
                    </InputLabel>
                    <SelectInput
                        options={["all", "single", "term"]}
                        value={enrollment}
                        onChange={(e) => setEnrollment(e.target.value)}
                        className="bg-db-pink text-white font-semibold border-2 border-white tracking-wider"
                    />
                </div>
            </div>
            <h1 className="text-3xl font-bold text-center py-5 mt-8">
                "Friendly funny phrase"
            </h1>
            {filteredClasses.map((item) => (
                <div key={item.id}>
                    <ClassCard class_={item} />
                </div>
            ))}
        </Layout>
    );
}
