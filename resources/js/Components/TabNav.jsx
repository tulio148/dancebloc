export default function TabNav({ tabs, activeTab, onTabChange, className }) {
    return (
        <div
            className={`fixed  bottom-0 sm:top-20 sm:pt-5 w-full h-fit bg-white sm:bg-db-pink ${className}`}
        >
            <div className="flex  gap-2 p-3 sm:px-6 sm:p-0 w-full max-w-7xl mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full mx-auto py-2 relative z-10 rounded-tr-md rounded-tl-md sm:bg-gradient-to-b   
                ${
                    index === activeTab
                        ? "transition-colors duration-700 text-white font-medium from-slate-200/90 from-2%"
                        : "text-slate-800 text-opacity-90 transition-colors duration-300 from-slate-200/50 hover:from-slate-200/70"
                }`}
                    >
                        <span className="inline ">{tab.icon}</span>
                        <span className="hidden pl-5 sm:inline lg:text-base text-base tracking-widest">
                            {tab.label}
                        </span>
                        <div
                            className={`absolute bottom-0 left-0 w-full border-t border-db-pink/30 sm:border-slate-200/60 transition-transform duration-500 transform origin-left ${
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
