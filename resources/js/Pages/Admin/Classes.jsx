import { useState } from "react";
import Modal from "@/Components/Modal";
import UpsertClass from "@/Components/UpsertClassForm";
import { router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashCan,
    faPenToSquare,
    faPlus,
    faChevronDown,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import formatDate from "@/Lib/dateformatter";

const filters = [
    { name: "Upcoming", value: "upcoming" },
    { name: "Beginner", value: "beginner" },
    { name: "Advanced", value: "advanced" },
    { name: "Single", value: "enrollment mode" },
    { name: "Term", value: "enrollment mode" },
];

export default function Classes({ classes }) {
    const [isOpen, setIsOpen] = useState(false);
    const [updateIsOpen, setUpdateIsOpen] = useState("");
    const [filter, setFilter] = useState([filters[0]]);

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
    console.log(filter);

    return (
        <div className="flex flex-wrap justify-center gap-2 mx-auto">
            <div className="bg-white flex flex-wrap justify-center rounded-xl drop-shadow-2xl">
                <table className="lg:sm:min-w-[700px] sm:min-w-[500px] min-w-[320px] divide-y divide-db-pink/30">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-lg font-medium tracking-wider">
                                <div className="flex justify-center items-center gap-3">
                                    <Listbox
                                        className="w-full"
                                        value={filter}
                                        onChange={setFilter}
                                        multiple
                                    >
                                        <div className="grid grid-cols-2 py-6 ">
                                            <Listbox.Button className="w-full text-left focus:outline-none ">
                                                <span className="mr-5">
                                                    Filter
                                                </span>
                                                <FontAwesomeIcon
                                                    icon={faChevronDown}
                                                    size="lg"
                                                    style={{ color: "#5b7aae" }}
                                                />
                                            </Listbox.Button>
                                            <button
                                                className=""
                                                onClick={createHandle}
                                            >
                                                <span className="mr-5">
                                                    New Class
                                                </span>
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    size="lg"
                                                    style={{ color: "#3661ab" }}
                                                />
                                            </button>
                                            <Modal
                                                show={isOpen}
                                                onClose={closeCreateModal}
                                                className="max-h-[800px] overflow-y-auto w-4/5 max-w-2xl"
                                            >
                                                <UpsertClass
                                                    closeCreateModal={
                                                        closeCreateModal
                                                    }
                                                />
                                            </Modal>
                                            <Listbox.Options className="grid grid-cols-2 col-span-2 gap-5 py-6 border-t">
                                                {filters.map(
                                                    (filter, index) => (
                                                        <Listbox.Option
                                                            key={index}
                                                            value={filter}
                                                        >
                                                            {({ selected }) => (
                                                                <div className="flex items-center gap-3">
                                                                    <span
                                                                        className={`block truncate text-sm ${
                                                                            selected
                                                                                ? "font-medium"
                                                                                : "font-normal"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            filter.name
                                                                        }
                                                                    </span>
                                                                    {selected ? (
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                            size="sm"
                                                                            style={{
                                                                                color: "#637492",
                                                                            }}
                                                                        />
                                                                    ) : (
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                            size="sm"
                                                                            style={{
                                                                                color: "#FFFFFF",
                                                                            }}
                                                                        />
                                                                    )}
                                                                </div>
                                                            )}
                                                        </Listbox.Option>
                                                    )
                                                )}
                                            </Listbox.Options>
                                        </div>
                                    </Listbox>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="mt-3 divide-y divide-gray-200 ">
                        {classes
                            .filter((item) => {
                                return filter.some(
                                    (filterItem) =>
                                        filterItem.value === item.level ||
                                        filterItem.value ===
                                            item.enrollment_mode
                                );
                            })
                            .map((item) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 whitespace-wrap">
                                        <Disclosure>
                                            <Disclosure.Button className="w-full text-left">
                                                {item.name}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="">
                                                <div className="flex justify-between gap-2 pt-3 text-sm text-db-pink">
                                                    {item.level}
                                                    <br />
                                                    {formatDate(item.datetime)}
                                                    <div className=" flex items-end gap-7">
                                                        <button
                                                            className=""
                                                            onClick={() =>
                                                                updateHandle(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faPenToSquare
                                                                }
                                                                size="lg"
                                                                style={{
                                                                    color: "#FF00F7",
                                                                }}
                                                            />
                                                            <Modal
                                                                show={
                                                                    updateIsOpen ==
                                                                    item.id
                                                                }
                                                                onClose={
                                                                    closeUpdateModal
                                                                }
                                                            >
                                                                <UpsertClass
                                                                    initialData={
                                                                        item
                                                                    }
                                                                    closeUpdateModal={
                                                                        closeUpdateModal
                                                                    }
                                                                />
                                                            </Modal>
                                                        </button>
                                                        <button
                                                            className=""
                                                            onClick={() =>
                                                                router.delete(
                                                                    `/classes/${item.name}`,
                                                                    {
                                                                        onBefore:
                                                                            () =>
                                                                                confirm(
                                                                                    "Are you sure you want to delete this class?"
                                                                                ),
                                                                    }
                                                                )
                                                            }
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faTrashCan
                                                                }
                                                                size="lg"
                                                                style={{
                                                                    color: "#f32013",
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
