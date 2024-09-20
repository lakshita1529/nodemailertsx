import React from 'react';

interface InputFieldProps {
  id: string;
  type: 'text' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, value, onChange, label, className }) => {
  if (type === 'textarea') {
    return (
      <div>
        <label htmlFor={id} className="block text-lg font-medium">
          {label}
        </label>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className={`mt-2 p-2 w-full border border-gray-300 rounded-md ${className}`}
          rows={5}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id} className="block text-lg font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-2 p-2 w-full border border-gray-300 rounded-md ${className}`}
      />
    </div>
  );
};

export default InputField;
