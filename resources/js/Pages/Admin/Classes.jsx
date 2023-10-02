import CreateClass from "@/Components/CreateClassForm";
export default function Classes({ classes }) {
    return (
        <>
            <div>
                {classes.map((item) => (
                    <div
                        key={item.id}
                        className="col-span-2 sm:col-span-1 border"
                    >
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <CreateClass />
        </>
    );
}
