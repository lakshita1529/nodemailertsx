interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;  
}

const InputField: React.FC<InputFieldProps> = ({ id, type, value, onChange, label, className }) => {
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
        className='mt-4 p-3 block w-96  border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
      />
    </div>
  );
};

export default InputField;
