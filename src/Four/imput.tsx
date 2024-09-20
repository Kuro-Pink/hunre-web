interface InputProps {
    title: string;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ title, placeholder }) => {
    return (
        <div>
            <div className="mt-4">
                <label className="block text-sm font-semibold" htmlFor={title}>
                    {title}
                </label>
                <input
                    className="mt-2 w-full rounded-md border-2 p-3"
                    type="text"
                    id="title"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};
