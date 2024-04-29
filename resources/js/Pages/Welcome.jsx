import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

export default function Welcome({ auth }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.8,
        // rootMargin: "-1000px 0px",
    });
    console.log(inView);
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
            <div className="flex items-end  bg-[url('/background.jpg')] mt-[-80px] bg-cover bg-center h-screen w-full lg:bg-top   ">
                <Transition
                    show={true}
                    appear={true}
                    enter="transition-opacity ease-linear duration-[2000ms]"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 "
                    className="w-full flex justify-end"
                >
                    <h1 className="max-w-md tracking-widest text-6xl sm:text-7xl text-white font-bold text-right py-5 my-4 lg:mr-10 ">
                        dance <span className="text-db-pink">bloc</span> Bra
                        <span className=" text-green-600">z</span>
                        <span className=" text-yellow-300">i</span>l
                    </h1>
                </Transition>
            </div>
            {/* <Transition
                show={true}
                appear={true}
                enter="transition-opacity ease-in duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="w-full max-w-7xl mt-4 mb-32  "
            >
            </Transition> */}
            <div ref={ref}>
                <Transition
                    show={inView}
                    appear={inView}
                    enter="transition-opacity ease-linear duration-[2000ms]"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="lg:min-w-[700px] sm:min-w-[500px] min-w-full"
                >
                    <h1 className="min-w-full tracking-widest pl-3 text-5xl text-white font-thin text-left  ">
                        unleash your inner carioca
                    </h1>
                </Transition>
            </div>
            <div className=" max-w-7xl  mt-14 mx-5 border-b bg-gradient-to-b  from-white from-90% p-9  rounded-xl shadow font-light text-2xl text-slate-500 tracking-wider leading-9 text-justify mb-[4000px]">
                Whether you&#39;ve always dreamed of mastering the captivating
                moves of Samba, the energetic kicks of Capoeira, or the sassy
                flow of Funk, Dance Bloc Brazil is your gateway to South
                American rhythm. Our fun and engaging classes cater to all
                levels, from complete beginners to seasoned dancers.
            </div>
        </Layout>
    );
}
