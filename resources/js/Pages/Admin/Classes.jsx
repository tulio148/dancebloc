import { useState } from "react";
import ClassCard from "@/Components/ClassCard";
import UpsertClass from "@/Components/UpsertClassForm";
import Modal from "@/Components/Modal";
import { router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Classes({ classes }) {
    const [isOpen, setIsOpen] = useState(false);
    const [updateIsOpen, setUpdateIsOpen] = useState("");

    const createHandle = () => {
        setIsOpen(!isOpen);
    };
    const closeCreateModal = () => {
        setIsOpen(false);
    };

    const updateHandle = (id) => {
        setUpdateIsOpen(id);
    };
    const closeUpdateModal = () => {
        setTimeout(() => {
            setUpdateIsOpen("");
        }, 0);
    };

    return (
        <>
            <div className="flex flex-col items-center gap-6 max-w-7xl mx-10 ">
                {classes.map((item) => (
                    <div className="flex flex-col gap-2" key={item.id}>
                        <ClassCard class_={item} />
                        <div className="self-end ">
                            <button
                                className="p-4"
                                onClick={() => updateHandle(item.id)}
                            >
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    size="xl"
                                    style={{ color: "#404040" }}
                                />
                                <Modal
                                    show={updateIsOpen == item.id}
                                    onClose={closeUpdateModal}
                                >
                                    <UpsertClass initialData={item} />
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
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    size="xl"
                                    style={{ color: "#404040" }}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={createHandle}>Create Class</button>
            <Modal show={isOpen} onClose={closeCreateModal}>
                <UpsertClass />
            </Modal>
        </>
    );
}
