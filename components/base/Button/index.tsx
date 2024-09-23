// src/components/base/Button.tsx
import React from "react";

interface ButtonProps {
  type: 'submit' | 'button';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick, className }) => {
  return (
    <button
      type={type}
      className={`py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
