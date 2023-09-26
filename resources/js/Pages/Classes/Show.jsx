import Enroll from "./Partials/Enroll";
export default function Show({ class_, auth }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">{class_.name}</h1>
            <Enroll id={class_.id} user={auth.user} />
        </div>
    );
}
