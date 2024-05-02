import gsap from "gsap";
import Layout from "@/Layouts/Layout";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Functions({ auth }) {
    const container = useRef();
    const circle = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(
        () => {
            gsap.to(".test", {
                x: "-200",
                duration: 10,
                scrollTrigger: {
                    trigger: ".test",
                    start: "top bottom",
                    toggleActions: "restart none none none",
                    scrub: true,
                    markers: true,
                },
            });
        },
        { scope: container }
    );

    return (
        <Layout user={auth.user}>
            <div className=" snap-y snap-mandatory overflow-scroll w-screen h-full">
                <div
                    id="classes"
                    className="snap-start flex items-end bg-[url('/danceclass.jpg')] bg-cover bg-center h-screen w-full  "
                ></div>

                <div
                    id="functions"
                    className="snap-start flex items-end bg-[url('/functions.jpg')] bg-cover bg-center h-screen w-full  "
                ></div>

                <div
                    id="costumes"
                    className="snap-start flex items-end bg-[url('/costume.jpg')] bg-cover bg-center h-screen w-full  "
                ></div>
            </div>
        </Layout>
    );
}
