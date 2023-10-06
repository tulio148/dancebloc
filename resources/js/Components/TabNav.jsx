export default function TabNav({ tabs, activeTab, onTabChange }) {
    return (
        <div className=" fixed top-16 w-full ">
            <div className="flex gap-2 p-2 max-w-7xl mx-auto bg-white">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full rounded-t-lg border-b-2  py-2.5 text-md font-medium text-black-700
                focus:outline-none
              ${
                  index === activeTab
                      ? "bg-db-pink shadow transition-colors duration-500 text-slate-100 "
                      : " text-slate-900 focus:border-b border-b-0 text-opacity-90 hover:text-opacity-100 transition-colors duration-500 "
              }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
