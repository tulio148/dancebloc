import { Head } from "@inertiajs/react";
import gsap from "gsap";
import Layout from "@/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import EventEnquire from "@/Components/EventEnquire";
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
        gsap.from("#button", {
            duration: 2,
            delay: 0.3,
            autoAlpha: 0,
            ease: "power4.inOut",
        });
    });
    const handleClick = (id, offset = 0) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    return (
        <Layout user={auth.user}>
            <Head title="Events" />
            <div className="grid grid-rows-3 bg-[url('/events1.webp')] bg-cover bg-center mb-3  h-screen w-full lg:bg-center">
                <button
                    id="button"
                    className="row-start-2 justify-self-start mx-7"
                    onClick={() => handleClick("form", 200)}
                >
                    <div className="animate-pulse ">
                        <FontAwesomeIcon
                            icon={faArrowDownLong}
                            size="7x"
                            style={{
                                color: "white",
                            }}
                        />
                    </div>
                </button>
                <div className="row-start-3 self-end max-w-2xl w-fit">
                    <div
                        id="top-header1"
                        className="mx-7 text-white font-extralight h-14 sm:h-16 bg-db-pink text-6xl md:text-7xl text-right"
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-6xl md:text-7xl  mb-20"
                    ></div>
                </div>
            </div>
            <div id="form" className="mt-56">
                <EventEnquire />
            </div>
        </Layout>
    );
}
