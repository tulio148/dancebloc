export default function TabNav({ tabs, activeTab, onTabChange }) {
    return (
        <div className="fixed left-0 bottom-0 sm:top-24 w-full h-fit ">
            <div className="flex gap-2 p-3 sm:px-6 w-full max-w-7xl mx-auto bg-white sm:bg-db-pink rounded-lg">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full py-2  relative z-10
                ${
                    index === activeTab
                        ? "border-db-pink border-opacity-75 transition-colors duration-1000 text-white/90"
                        : "text-slate-900 text-opacity-90 transition-colors duration-300"
                }`}
                    >
                        <span className="inline sm:hidden">{tab.icon}</span>
                        <span className="hidden sm:inline lg:text-base text-sm">
                            {tab.label}
                        </span>
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
