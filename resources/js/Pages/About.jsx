import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

export default function About({ auth }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        // rootMargin: "-100px 0px",
    });
    return (
        <Layout user={auth.user}>
            <Head title="Our Mission" />
            <Transition
                show={true}
                appear={true}
                enter="transition-opacity ease-linear duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="lg:min-w-[700px] sm:min-w-[500px] min-w-full"
            >
                <h1 className="min-w-full tracking-widest text-5xl text-white font-thin text-right py-5 my-16 ">
                    samba is love
                </h1>
            </Transition>
            <img src="\example.jpg" alt="" />
            <div className="px-8 py-6 rounded-3xl mx-6 my-6 max-w-5xl h-fit w-full">
                <h3 className="text-white text-lg text-justify leading-9 tracking-widest font-normal">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Earum dolorum molestiae nulla doloremque quasi assumenda
                    esse fugiat blanditiis excepturi minima. Voluptas unde
                    ducimus rerum voluptates quasi dignissimos veniam placeat
                    dolorem! Eius, dolore quaerat? Sapiente et dolores, hic enim
                    pariatur maxime mollitia quos fuga exercitationem unde
                    dolore!
                </h3>
            </div>
            <div
                ref={ref}
                className="flex flex-wrap justify-around gap-16 w-full max-w-5xl mb-[2000px]"
            >
                <div
                    className={`brightness-110 contrast-100 transition-all duration-2000 ${
                        inView
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 translate-x-[-20px] translate-y-[-20px]"
                    }`}
                >
                    <img
                        src="\FB_IMG_1663988716080-removebg-preview.png"
                        alt=""
                    />
                </div>

                <div
                    className={`brightness-110 contrast-100 transition-all duration-2000 p-4 sm:p-8  bg-gradient-to-br from-white from-50% shadow rounded-xl mx-3 text-slate-500 text-lg text-center leading-9 tracking-widest font-normal ${
                        inView
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 translate-x-[20px] translate-y-[20px]"
                    }`}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, quasi.
                </div>
            </div>
        </Layout>
    );
}
