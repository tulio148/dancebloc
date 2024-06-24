import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { InstagramEmbed } from "react-social-media-embed";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";

export default function About({ auth }) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to("#top-header1", {
            duration: 1.2,
            // delay: 1,
            text: {
                value: "samba",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.2,
            delay: 1,
            text: {
                value: "is rhythmic love",
            },
            ease: "power4.out",
        });
    });

    return (
        <Layout user={auth.user}>
            <Head title="About Us" />
            <div className="flex items-end bg-[url('/about.webp')] bg-cover bg-left mb-3  h-screen w-full lg:bg-center">
                <div>
                    <div
                        id="top-header1"
                        className="mx-7 text-white  font-extralight h-14 sm:h-20 bg-db-pink text-5xl md:text-7xl text-right"
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-5xl md:text-7xl  mb-20"
                    ></div>
                </div>
            </div>
            {/* <div className="w-full sm:w-[640px]">
                    <InstagramEmbed
                        url="https://www.instagram.com/p/C5TAzo2P5VR/"
                        // width={328}
                    />
                </div> */}
        </Layout>
    );
}
