import Layout from "@/Layouts/Layout";
export default function Contact({ auth }) {
    return (
        <Layout user={auth.user}>
            <div>test</div>;
        </Layout>
    );
}
