export default function TabNav({ tabs, activeTab, onTabChange }) {
    return (
        <div className="mx-auto bg-db-light-pink fixed w-full ">
            <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full rounded-md py-2.5 text-sm font-medium text-black-700
                focus:outline-none
              ${
                  index === activeTab
                      ? "bg-white shadow transition-opacity duration-1000 bg-opacity-100"
                      : " bg-white text-black-100 hover:bg-white/[0.12] hover:text-black transition-opacity duration-1000 bg-opacity-10"
              }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
