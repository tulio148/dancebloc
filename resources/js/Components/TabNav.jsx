export default function TabNav({ tabs, activeTab, onTabChange, className }) {
    return (
        <div
            className={`fixed left-0 bottom-0 sm:top-20 w-full h-fit bg-white sm:bg-db-pink ${className}`}
        >
            <div className="flex gap-2 p-3 sm:px-6 sm:p-0 w-full max-w-7xl mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full py-2 relative z-10 rounded-tr-md rounded-tl-md bg-gradient-to-br from-white/50 from-5% 
                ${
                    index === activeTab
                        ? "transition-colors duration-1000 text-white"
                        : "text-slate-800 text-opacity-90 transition-colors duration-300"
                }`}
                    >
                        <span className="inline pr-5">{tab.icon}</span>
                        <span className="hidden sm:inline lg:text-base text-base tracking-widest">
                            {tab.label}
                        </span>
                        <div
                            className={`absolute bottom-0 left-0 w-full border-t border-db-pink sm:border-white/40 transition-transform duration-1000 transform ${
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
