// Input Event
type InputProps = {
    value: string;
    placeholder: string;
    type: 'text' | 'email' | 'number';
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ handleChange, value, type, placeholder }: InputProps) => {
    return (
        <input
            onChange={handleChange}
            value={value}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;
