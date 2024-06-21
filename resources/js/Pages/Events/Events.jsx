import { Head } from "@inertiajs/react";
import gsap from "gsap";
import Layout from "@/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";
export default function Events({ auth }) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    useGSAP(() => {
        gsap.to("#top-header1", {
            duration: 1.2,
            // delay: 1,
            text: {
                value: "ignite",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.2,
            delay: 1,
            text: {
                value: "your event",
            },
            ease: "power4.out",
        });
    });
    return (
        <Layout user={auth.user}>
            <Head title="Events" />
            <div className="flex items-end bg-[url('/events1.webp')] bg-cover bg-center mb-3  h-screen w-full lg:bg-center">
                <div>
                    <div
                        id="top-header1"
                        className="mx-7 text-white font-thin h-14 sm:h-16 bg-db-green text-6xl md:text-7xl text-right"
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-6xl md:text-7xl  mb-20"
                    ></div>
                </div>
            </div>
        </Layout>
    );
}
