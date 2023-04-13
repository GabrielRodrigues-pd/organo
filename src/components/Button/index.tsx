import React, { ReactElement } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactElement | string 
}

export const Button = (props:ButtonProps) => {
  return (
    <div>
      <button className="button">{props.children}</button>
    </div>
  );
};
