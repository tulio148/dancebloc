import { useState } from "react";
import ClassCard from "@/Components/ClassCard";
import CreateClass from "@/Components/CreateClassForm";
import Modal from "@/Components/Modal";
import { router } from "@inertiajs/react";
import Bin from "@/Components/BinIcon";
import Pencil from "@/Components/PencilIcon";
export default function Classes({ classes }) {
    const [isOpen, setIsOpen] = useState(false);
    const [updateIsOpen, setUpdateIsOpen] = useState(false);
    const handle = () => {
        setIsOpen(!isOpen);
    };
    const updateHandle = () => {
        setUpdateIsOpen(!updateIsOpen);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto px-4 ">
                {classes.map((item) => (
                    <div className="flex flex-col  gap-2 " key={item.id}>
                        <ClassCard key={item.id} class_={item} />
                        <div className="self-center ">
                            <button className="p-4" onClick={updateHandle}>
                                <Pencil />
                                <Modal show={updateIsOpen} onClose={closeModal}>
                                    <CreateClass initialData={item} />
                                </Modal>
                            </button>
                            <button
                                className="p-4"
                                onClick={() =>
                                    router.delete(`/classes/${item.name}`, {
                                        onBefore: () =>
                                            confirm(
                                                "Are you sure you want to delete this class?"
                                            ),
                                    })
                                }
                            >
                                <Bin />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handle}>Create Class</button>
            <Modal show={isOpen} onClose={closeModal}>
                <CreateClass />
            </Modal>
        </>
    );
}
