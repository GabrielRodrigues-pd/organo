import React from 'react';
import './Dropdown.css';

interface Dropdown {
  required: boolean
  label: string
  itens: string[]
  value: string
  newValue: (value: any) => void
}


export const Dropdown = ({ required, label, itens, value, newValue }: Dropdown) => {
  return (
    <div className="dropdown">
      <label htmlFor="">{label}</label>
      <select
        onChange={e => newValue(e.target.value)}
        name=""
        id=""
        required={required}
        value={value}
      >
        <option value=""></option>
        {itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
