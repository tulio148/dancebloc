export default function TabNav({ tabs, activeTab, onTabChange }) {
    return (
        <div className="fixed left-0 bottom-0 sm:top-16 w-full h-fit ">
            <div className="flex gap-2 p-2 w-full max-w-7xl mx-auto bg-white sm:bg-db-pink">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full py-2.5 text-md font-medium text-black-700 relative z-10
                ${
                    index === activeTab
                        ? " border-db-pink border-opacity-75  "
                        : "text-slate-900  text-opacity-90 "
                }`}
                    >
                        <span className="inline sm:hidden">{tab.icon}</span>
                        <span className="hidden sm:inline">
                            {tab.label}
                        </span>{" "}
                        <div
                            className={`absolute bottom-0 left-0 w-full border-t border-db-pink sm:border-white transition-transform duration-1000 transform ${
                                index === activeTab
                                    ? "scale-x-100"
                                    : "scale-x-0"
                            }`}
                        ></div>
                    </button>
                ))}
            </div>
        </div>
    );
}
