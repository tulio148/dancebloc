import gsap from "gsap";
import Layout from "@/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";
export default function Events({ auth }) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    useGSAP(() => {
        gsap.to("#heading", {
            duration: 3,

            text: {
                value: "More Than Just Steps",
                speed: 1,
            },

            ease: "none",
        });
    });
    return (
        <Layout user={auth.user}>
            <div className="flex flex-col justify-center">
                <div
                    id="heading"
                    className=" m-4 bg-white max-w-fit text-db-pink font-light text-3xl"
                ></div>
                <div className=" max-w-3xl m-4 p-4 sm:p-8 border border-white bg-white bg-gradient-to-t from-white to-db-light-pink/20  shadow-lg rounded-xl">
                    <p className="text-black/90 font-light text-2xl tracking-widest leading-9 md:text-justify ">
                        At Dance Bloc Brazil, we believe dance is more than just
                        physical activity. It&#39;s a celebration of culture, a
                        way to connect with your body, and a chance to build a
                        supportive community.
                        <br />
                        <br />
                        Our experienced instructors are not just teachers; they
                        are passionate artists who will guide you on your dance
                        journey with enthusiasm and cultural understanding.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
