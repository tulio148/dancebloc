import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { InstagramEmbed } from "react-social-media-embed";

export default function About({ auth }) {
    return (
        <Layout user={auth.user}>
            <Head title="Our Mission" />
            {/* <div className="w-full sm:w-[640px]">
                <InstagramEmbed
                    url="https://www.instagram.com/p/C5TAzo2P5VR/"
                    // width={328}
                />
            </div> */}
        </Layout>
    );
}
