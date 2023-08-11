// Button Event
type BtnProps = {
    children: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ handleClick, children }: BtnProps) => {
    return <button onClick={(event) => handleClick(event)}>{children}</button>;
};

export default Button;
