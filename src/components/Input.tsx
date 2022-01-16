import React from 'react';

type InputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Input = ({ value, handleChange }: InputProps) => {
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
};

export default Input;