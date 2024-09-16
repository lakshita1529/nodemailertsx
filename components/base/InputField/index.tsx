import React from 'react';

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, value, onChange, label, className }) => {
  if (type === 'textarea') {
    return (
      <div>
        <label htmlFor={id} className="block text-lg text-gray-700">
          {label}
        </label>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className={`mt-4 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id} className="block text-lg text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-4 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
      />
    </div>
  );
};

export default InputField;
