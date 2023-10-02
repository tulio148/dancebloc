export default function TabNav({ tabs, activeTab, onTabChange }) {
    return (
        <div className="mx-auto bg-pink-300/80 ">
            <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className={`w-full rounded-md py-2.5 text-sm font-medium leading-5 text-black-700
              ring-white ring-opacity-60 ring-offset-2 ring-offset-green-100 focus:outline-none focus:ring-1
              ${
                  index === activeTab
                      ? "bg-white shadow"
                      : "text-black-100 hover:bg-white/[0.12] hover:text-black"
              }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
