import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { ScrollTrigger } from "gsap/all";

export default function Welcome({ auth }) {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from("#logo-text", { opacity: 0, duration: 2 });

        gsap.from("#logoimg", {
            scrollTrigger: {
                trigger: "#logoimg",
                start: "center center",
                end: "+=4000px",
                scrub: true,
                pin: "#logoimg",
                toggleActions: "play none none reverse",
                // markers: true,
            },
            opacity: 0,
        });

        gsap.from("#dancer1", {
            scrollTrigger: {
                id: "dancer1",
                trigger: "#dancer1",
                start: "top top",
                end: "+=1500px",
                // scrub: true,
                pin: "#dancer1",
                toggleActions: "play none restart reverse",
                markers: true,
            },
            opacity: 0,
            duration: 1,
        });

        gsap.from("#heading1", {
            scrollTrigger: {
                id: "heading",
                trigger: "#dancer1",
                start: "center center",
                // end: "+=1400px",
                // scrub: true,
                toggleActions: "play none none reverse",
                markers: true,
            },
            xPercent: 100,
            duration: 2,
        });

        gsap.from("#heading2", {
            scrollTrigger: {
                id: "heading2",
                trigger: "#dancer1",
                start: "center center",
                // end: "+=1400px",
                // scrub: 1,
                toggleActions: "play none none reverse",
                markers: true,
            },
            xPercent: -100,
            duration: 2,
            delay: 0.5,
        });

        gsap.from("#danceclass", {
            scrollTrigger: {
                id: "danceclass",
                trigger: "#danceclass",
                start: "top top",
                end: "+=1500px",
                // scrub: true,
                pin: "#danceclass",
                toggleActions: "play none restart reverse",
                // markers: true,
            },
            opacity: 0,
            duration: 1,
        });

        gsap.from("#heading3", {
            scrollTrigger: {
                id: "heading3",
                trigger: "#danceclass",
                start: "center center",
                // end: "+=1200px",
                // scrub: true,
                toggleActions: "play none none reverse",
                // markers: true,
            },
            xPercent: -100,
            duration: 2,
        });

        gsap.from("#heading4", {
            scrollTrigger: {
                id: "heading4",
                trigger: "#danceclass",
                start: "center center",
                // end: "+=1200px",
                // scrub: 1,
                toggleActions: "play none none reverse",
                // markers: true,
            },
            xPercent: 100,
            duration: 2,
            delay: 0.5,
        });
        gsap.from("#functions", {
            scrollTrigger: {
                id: "functions",
                trigger: "#functions",
                start: "top top",
                end: "+=1500px",
                // scrub: true,
                pin: "#functions",
                toggleActions: "play reset restart reverse",
                // markers: true,
            },
            opacity: 0,
            duration: 1,
        });

        gsap.from("#heading5", {
            scrollTrigger: {
                id: "heading5",
                trigger: "#functions",
                start: "center center",
                // end: "+=1200px",
                // scrub: true,
                toggleActions: "play none none reverse",
                // markers: true,
            },
            xPercent: -100,
            duration: 2,
        });

        gsap.from("#heading6", {
            scrollTrigger: {
                id: "heading6",
                trigger: "#functions",
                start: "center center",
                // end: "+=1200px",
                // scrub: 1,
                toggleActions: "play none none reverse",
                // markers: true,
            },
            xPercent: 100,
            duration: 2,
            delay: 0.5,
        });
    });
    return (
        <Layout user={auth.user}>
            <Head>
                <title>Home Page</title>
                <meta
                    name="description"
                    content="Whether you&#39;ve always dreamed of mastering the captivating moves of Samba, the
                    energetic kicks of Capoeira, or the sassy flow of Funk, Dance Bloc Brazil is your
                    gateway to South American rhythm. Our fun and engaging classes cater to all levels,
                    from complete beginners to seasoned dancers."
                />
            </Head>
            {/* HERO */}
            <div className="flex items-end bg-[url('/background.webp')] mt-[-80px] bg-fixed bg-cover bg-center h-screen w-full lg:bg-top mb-[100px]">
                {/* <Transition
                    show={true}
                    appear={true}
                    enter="transition-opacity ease-linear duration-[2000ms]"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 "
                    className="w-full flex justify-end"
                > */}
                <div id="logo-text" className="w-full flex justify-end">
                    <h1 className=" max-w-md tracking-widest text-6xl sm:text-7xl opacity-80 text-white font-bold text-right py-5 my-4 lg:mr-10 ">
                        dance <span className="text-db-pink">bloc</span> Bra
                        <span className=" text-green-600">z</span>
                        <span className=" text-yellow-300">i</span>l
                    </h1>
                </div>
                {/* </Transition> */}
            </div>
            {/* LOGO ANIMATION */}
            <img
                id="logoimg"
                src="/logonobg.png"
                alt=""
                className="w-[350px] mb-[2000px]"
            />
            {/* DANCER WITH TEXT */}
            <div
                id="dancer1"
                className=" flex flex-col justify-between bg-[url('/dancer1.webp')] bg-cover bg-center xl:bg-contain h-screen w-full mb-[1500px] overflow-hidden"
            >
                <div
                    id="heading1"
                    className=" w-full bg-gradient-to-r from-db-pink/70 from-20% py-1 my-32 "
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl text-white  font-thin text-right">
                        unleash your
                    </h1>
                </div>
                <div
                    id="heading2"
                    className=" w-full bg-gradient-to-l from-db-pink/50 from-20% py-1  my-32"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white  font-thin text-left">
                        inner brazilian
                    </h1>
                </div>
            </div>
            <div
                id="danceclass"
                className=" flex flex-col justify-between bg-[url('/danceclass.jpg')] bg-cover bg-center h-screen w-full mb-[1500px] overflow-hidden"
            >
                <div
                    id="heading3"
                    className=" w-full bg-gradient-to-l from-db-green/70 from-20% py-1 my-32 "
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl text-white  font-thin text-right">
                        Dance Classes
                    </h1>
                </div>
                <div
                    id="heading4"
                    className=" w-full bg-gradient-to-r from-db-green/50 from-20% py-1  my-32"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white  font-thin text-left">
                        Learn More
                    </h1>
                </div>
            </div>

            <div
                id="functions"
                className="flex flex-col justify-between bg-[url('/functions.jpg')] bg-cover bg-center h-screen w-full  "
            >
                <div
                    id="heading5"
                    className=" w-full bg-gradient-to-l from-db-pink/70 from-20% py-1 my-32 "
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl text-white  font-thin text-right">
                        Dance Classes
                    </h1>
                </div>
                <div
                    id="heading6"
                    className=" w-full bg-gradient-to-r from-db-pink/50 from-20% py-1  my-32"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white  font-thin text-left">
                        Learn More
                    </h1>
                </div>
            </div>

            <div
                id="costumes"
                className="flex items-end bg-[url('/costume.jpg')] bg-cover bg-center h-screen w-full  "
            ></div>

            {/* <div className=" flex flex-col max-w-7xl  mt-14 mx-5 border-b bg-gradient-to-br  from-white from-90% p-9  rounded-xl shadow font-bold text-2xl text-black/60 tracking-wider leading-relaxed text-justify mb-[4000px]">
                <div className="bg-[url('/bateria.jpg')] bg-cover bg-center w-[250px] h-[250px] rounded-full border-2 border-white/80"></div>
                <div className="bg-[url('/funk.webp')] bg-cover w-[250px] h-[250px] rounded-full border-2 border-white/80"></div>
                Whether you&#39;ve always dreamed of mastering the captivating
                moves of Samba, the energetic kicks of Capoeira, or the sassy
                flow of Funk, Dance Bloc Brazil is your gateway to South
                American rhythm.
                <br />
                <br />
                Our fun and engaging classes cater to all levels, from complete
                beginners to seasoned dancers.
            </div> */}
        </Layout>
    );
}
