import { useState } from "react";
import ClassCard from "@/Components/ClassCard";
import CreateClass from "@/Components/CreateClassForm";
import Modal from "@/Components/Modal";
export default function Classes({ classes }) {
    const [isOpen, setIsOpen] = useState(false);
    const handle = () => {
        setIsOpen(!isOpen);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto px-4 ">
                {classes.map((item) => (
                    <ClassCard key={item.id} class_={item} />
                ))}
            </div>
            <button onClick={handle}>Create Class</button>
            <Modal show={isOpen} onClose={closeModal}>
                <CreateClass />
            </Modal>
        </>
    );
}
