import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head, Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { ScrollTrigger } from "gsap/all";

export default function Welcome({ auth }) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.from("#logo-text", {
            opacity: 0,
            duration: 3,
            ease: "power2.inOut",
        });
        gsap.from("#logo-img", {
            scrollTrigger: {
                trigger: "#logo-img",
                start: "center center",
                end: "+=5000px",
                scrub: true,
                pin: "#logo-img",
                toggleActions: "play reset reverse reset",
                // markers: true,
            },
            opacity: 0,
        });
        gsap.from("#dancer1", {
            scrollTrigger: {
                id: "dancer1",
                trigger: "#dancer1",
                start: "top top",
                end: "+=6000px",
                // scrub: true,
                pin: "#dancer1",
                toggleActions: "play none none none",
                // markers: true,
            },
            opacity: 0,
            duration: 1,
            ease: "power4.in",
        });
        gsap.from("#heading1", {
            scrollTrigger: {
                id: "heading",
                trigger: "#dancer1",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            // opacity: 0,
            xPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
        });
        gsap.from("#heading2", {
            scrollTrigger: {
                id: "heading2",
                trigger: "#dancer1",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            xPercent: -100,
            duration: 2,
            delay: 1.5,
            ease: "power4.out",
        });
        gsap.from("#danceclass", {
            scrollTrigger: {
                id: "danceclass",
                trigger: "#danceclass",
                start: "top top",
                end: "+=6000px",
                // scrub: true,
                pin: "#danceclass",
                toggleActions: "play none none none",
                // markers: true,
            },
            opacity: 0,
            duration: 1,
            ease: "power4.in",
        });
        gsap.from("#heading3", {
            scrollTrigger: {
                id: "heading3",
                trigger: "#danceclass",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            // opacity: 0,
            xPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
        });
        gsap.from("#heading4", {
            scrollTrigger: {
                id: "heading4",
                trigger: "#danceclass",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            xPercent: -100,
            duration: 2,
            delay: 1.5,
            ease: "power4.out",
        });
        gsap.from("#functions", {
            scrollTrigger: {
                id: "functions",
                trigger: "#functions",
                start: "top top",
                end: "+=4000px",
                // scrub: true,
                pin: "#functions",
                toggleActions: "play none none none",
                // markers: true,
            },
            opacity: 0,
            duration: 1,
            ease: "power4.in",
        });
        gsap.from("#heading5", {
            scrollTrigger: {
                id: "heading5",
                trigger: "#functions",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            // opacity: 0,
            xPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
        });
        gsap.from("#heading6", {
            scrollTrigger: {
                id: "heading6",
                trigger: "#functions",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            xPercent: -100,
            duration: 2,
            delay: 1.5,
            ease: "power4.out",
        });
        gsap.from("#costumes", {
            scrollTrigger: {
                id: "costumes",
                trigger: "#costumes",
                start: "top top",
                end: "+=3000px",
                // scrub: true,
                pin: "#costumes",
                toggleActions: "play none none none",
                // markers: true,
            },
            opacity: 0,
            duration: 1,
            ease: "power4.in",
        });
        gsap.from("#heading7", {
            scrollTrigger: {
                id: "heading7",
                trigger: "#costumes",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            // opacity: 0,
            xPercent: 100,
            duration: 2,
            delay: 1,
            ease: "power4.out",
        });
        gsap.from("#heading8", {
            scrollTrigger: {
                id: "heading8",
                trigger: "#costumes",
                start: "top top",
                // end: "+=2200px",
                // scrub: true,
                toggleActions: "play none none none",
                // markers: true,
            },
            xPercent: -100,
            duration: 2,
            delay: 1.5,
            ease: "power4.out",
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
            <div className="flex items-end bg-[url('/background.webp')] mt-[-80px] bg-fixed bg-cover bg-center h-screen w-full lg:bg-top">
                <div id="logo-text" className="w-full flex justify-end">
                    <h1 className=" max-w-md tracking-widest text-6xl sm:text-7xl opacity-80 text-white font-bold text-right pb-20 my-4 lg:mr-10 ">
                        dance <span className="text-db-pink">bloc</span> Bra
                        <span className=" text-green-600">z</span>
                        <span className=" text-yellow-300">i</span>l
                    </h1>
                </div>
            </div>
            {/* LOGO ANIMATION */}
            <img
                id="logo-img"
                src="/logonobg.webp"
                alt=""
                className="w-[350px] mb-[1800px]"
            />
            {/* DANCER WITH TEXT */}
            <div
                id="dancer1"
                className=" flex flex-col justify-between bg-[url('/dancer1.webp')] bg-cover bg-center xl:bg-contain h-screen w-full mb-[2000px] overflow-hidden"
            >
                <div
                    id="heading1"
                    className=" w-full bg-gradient-to-l from-db-pink/90 from-30% py-1 my-32 shadow-md shadow-db-pink/30"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl text-white  font-extralight text-right">
                        unleash your
                    </h1>
                </div>
                <div
                    id="heading2"
                    className=" w-full bg-gradient-to-r from-db-pink/90 from-30% py-1  my-32 shadow-md shadow-db-pink/30"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white font-extralight text-left">
                        inner brazilian
                    </h1>
                </div>
            </div>
            <div
                id="danceclass"
                className=" flex flex-col justify-between bg-[url('/danceclass.webp')] bg-cover bg-center h-screen w-full mb-[2000px] overflow-hidden"
            >
                <div
                    id="heading3"
                    className=" w-full bg-gradient-to-l from-db-green from-30% py-4 pr-6 my-32 shadow-md shadow-db-green/70 flex justify-end"
                >
                    <h1 className="tracking-widest lg:px-24 text-5xl w-1/2 text-white font-extralight text-right">
                        dance classes
                    </h1>
                </div>
                <div
                    id="heading4"
                    className=" w-full bg-db-green/90 py-4  my-32 shadow-md shadow-db-green/70"
                >
                    <Link href={route("classes")}>
                        <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white font-extralight text-center">
                            learn more
                        </h1>
                    </Link>
                </div>
            </div>

            <div
                id="functions"
                className=" flex flex-col justify-between bg-[url('/functions.webp')] bg-cover bg-center h-screen w-full mb-[2000px] overflow-hidden"
            >
                <div
                    id="heading5"
                    className=" w-full bg-gradient-to-l from-db-pink
                     from-20% py-4 my-32 shadow-md shadow-db-pink/70"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl text-white font-extralight text-right">
                        functions
                    </h1>
                </div>
                <div
                    id="heading6"
                    className=" w-full bg-db-pink/80 from-20% py-4  my-32 shadow-md shadow-db-pink/70"
                >
                    <Link href={route("functions")}>
                        <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white font-extralight text-center">
                            learn more
                        </h1>
                    </Link>
                </div>
            </div>
            <div
                id="costumes"
                className=" flex flex-col justify-between bg-[url('/costume.webp')] bg-cover bg-center h-screen w-full mb-[4000px] overflow-hidden"
            >
                <div
                    id="heading7"
                    className=" w-full bg-gradient-to-l from-db-green from-20% py-4 my-32 shadow-md shadow-db-green/70"
                >
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl text-white font-extralight text-right">
                        costumes
                    </h1>
                </div>
                <div
                    id="heading8"
                    className=" w-full bg-db-green/80 from-20% py-4  my-32 "
                >
                    {/* <Link href={route("costumes")}> */}
                    <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl text-white font-extralight text-center">
                        coming soon
                    </h1>
                    {/* </Link> */}
                </div>
            </div>

            {/* 
            <div
                id="costumes"
                className="flex items-end bg-[url('/costume.jpg')] bg-cover bg-center h-screen w-full  "
            ></div> */}

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
