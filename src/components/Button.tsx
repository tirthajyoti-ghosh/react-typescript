type ButtonProps = {
   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ handleClick }: ButtonProps) => {
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Button;