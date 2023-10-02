import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AdminTabNav() {
    let [categories] = useState({
        Classes: [
            {
                id: 1,
                title: "Does drinking coffee make you smarter?",
                date: "5h ago",
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: "2h ago",
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Students: [
            {
                id: 1,
                title: "Is tech making coffee better or worse?",
                date: "Jan 7",
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: "The most innovative things happening in coffee",
                date: "Mar 19",
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Orders: [
            {
                id: 1,
                title: "Ask Me Anything: 10 answers to your questions about coffee",
                date: "2d ago",
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: "4d ago",
                commentCount: 1,
                shareCount: 2,
            },
        ],
    });

    return (
        <div className="max-w-7xl mx-auto ">
            <Tab.Group>
                <Tab.List className="flex gap-2 bg-pink-300/80 px-1 py-2">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-md py-2.5 text-sm font-medium leading-5 text-black-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-green-100 focus:outline-none focus:ring-1",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-black-100 hover:bg-white/[0.12] hover:text-black"
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="rounded-md p-3 hover:bg-gray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>

                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>
                                                {post.commentCount} comments
                                            </li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
