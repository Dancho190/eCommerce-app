import React from 'react';

interface InputProps {
  type: string;
  name: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, defaultValue, onChange }) => {
  return (
    <input
      className="form-input"
      type={type}
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
      required
    />
  );
};

export default Input;