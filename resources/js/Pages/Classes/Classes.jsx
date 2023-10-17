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
    console.log(style);
    console.log(level);
    console.log(enrollment);
    return (
        <Layout user={auth.user}>
            <Head title="Classes" />
            <div className="fixed z-50 flex gap-4 justify-center py-4 border bg-white bottom-0 sm:top-20  lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full">
                <div className="flex flex-col max-w-fit items-center gap-2">
                    <InputLabel>Style</InputLabel>
                    <SelectInput
                        options={["all", "samba"]}
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        className="text-center"
                    />
                </div>
                <div className="flex flex-col max-w-fit items-center gap-2">
                    <InputLabel>Level</InputLabel>
                    <SelectInput
                        options={["all", "beginner", "advanced", "kids"]}
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="text-center"
                    />
                </div>
                <div className="flex flex-col max-w-fit items-center gap-2">
                    <InputLabel>Enrollment</InputLabel>
                    <SelectInput
                        options={["all", "class", "term"]}
                        value={enrollment}
                        onChange={(e) => setEnrollment(e.target.value)}
                        className="text-center"
                    />
                </div>
            </div>
            <h1 className="text-3xl font-bold text-center py-5 mt-14">
                "Friendly funny phrase"
            </h1>
            {classes.map((item) => (
                <div key={item.id}>
                    <ClassCard class_={item} />
                </div>
            ))}
        </Layout>
    );
}
