import React from 'react';
import './input.css';

interface InputProps {
  newValue: (value: string) => void
  placeholder: string
  type?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
  label: string
  value: string
  required?: boolean
}

export const Input = ({
  type = 'text',
  label,
  placeholder,
  required = false,
  value,
  newValue,
}: InputProps) => {
  return (
    <div className={`input input-${type}`}>
      <label htmlFor="name">{label}</label>
      <input
        required={required}
        type={type}
        name="name"
        id="name"
        placeholder={placeholder}
        onChange={e => newValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
