export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-8 py-3 bg-gradient-to-tr from-db-pink from-5%   rounded-md font-semibold text-md text-white tracking-widest hover:bg-gradient-to-tr  hover:from-db-pink hover:from-50%  focus:bg-gray-700 active:bg-db-pink transition ease-in-out duration-150 ${
                    disabled && "opacity-70"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
