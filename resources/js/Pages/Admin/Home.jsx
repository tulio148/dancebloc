export default function Home({ user }) {
    return (
        <div className="flex flex-col max-w-7xl mx-auto">
            <h1>Welcome back {user.name}!</h1>
        </div>
    );
}
