import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TextPlugin } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FAQ({ auth }) {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const faqData = [
        {
            question:
                "Do I need any prior dance experience to take your classes?",
            answer: "Not at all! We offer classes for all levels and welcome everyone, from seasoned dancers to those who've only danced at weddings (or maybe even tripped over the vacuum cleaner at home a few times). We believe anyone can learn to love these rhythms and move their body with confidence! So come along for a dance, and see if you don't surprise yourself!",
        },
        {
            question: "What should I wear to class?",
            answer: "Wear comfortable clothing that allows for movement. Comfortable shoes, like sneakers, are a great option. If you wear it to the gym, you can wear it to dance!",
        },
        {
            question: "Do I need a partner for the classes?",
            answer: "No partner is necessary; that's the beauty of our classes. Of course, if you have a partner or friend who wants to join the fun, that's totally welcome too.",
        },
        {
            question: "Do you offer drop-in classes?",
            answer: "Yes, we offer drop-in classes and they are advertised as casual classes on class bookings page.",
        },
        {
            question: "What is the atmosphere like?",
            answer: "We have a fun and welcoming atmosphere! Our classes are a great way to meet new people, learn a new skill and get some exercise.",
        },
        {
            question: "Can I take a trial class?",
            answer: "We totally understand that commitment is a scary word these days! That's why we're happy to offer a free trial class. Come and see if you like the moves, the music and the vibe - no pressure! Then if you're hooked (and we have a feelign you will be), you can sign up for the term.",
        },
        {
            question: "Will I have to perform?",
            answer: "Occasionally we have performance oppotunities for our students and the spotlight is all yours if you want it. We have students who absolutely love performing at our events, and its a fantastic way to showcase your skills. But fear not, there's absolutely no pressure to perofrm if that's not your thing. We believe in having fun and learning at your own pace. So, come for the supportive atmosphere, stay for the killer dance moves, and perform only if you're feeling like a toal superstar (which you will be!)",
        },
        {
            question: "Where to next, if I become an amazing dancer?",
            answer: "We love ambition. If you master the moves and leave us speechless with your dancing skills, then there are a few exciting options. We offer opportunities to perform at professional events, so you can showcase you talents on a bigger stage. You could aso consider taking on private lessons to further refine your tehcniques.",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.to("#header", {
            text: { value: "Frequently Asked Questions", speed: 0.7 },
        });
    });

    return (
        <Layout user={auth.user}>
            <Head title="FAQ" />
            <div className="w-full max-w-7xl mt-14">
                <h1
                    id="header"
                    className="tracking-widest text-6xl text-white font-extralight p-5 my-16"
                ></h1>
            </div>
            <div className="flex flex-col gap-7">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 max-h-fit border-b bg-gradient-to-b from-white from-90% max-w-5xl px-6 pt-10 pb-6 rounded-3xl z-40 shadow"
                    >
                        <div
                            className="flex items-center gap-2 h-full cursor-pointer"
                            onClick={() => toggleExpand(index)}
                        >
                            <p className="font-semibold">{faq.question}</p>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="lg"
                                style={{
                                    transform:
                                        expandedIndex === index
                                            ? "rotate(90deg)"
                                            : "rotate(0deg)",
                                    color: "#FF00F7",
                                    transition: "transform 0.3s linear",
                                }}
                            />
                        </div>
                        <div
                            className={`transition-max-height duration-1000 ease-in-out overflow-hidden flex flex-col ${
                                expandedIndex === index
                                    ? "max-h-[2000px]"
                                    : "max-h-0"
                            }`}
                        >
                            <div className="border-t border-1 border-black/10 mb-4"></div>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
