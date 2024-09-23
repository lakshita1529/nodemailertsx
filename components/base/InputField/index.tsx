
interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, value, onChange, label, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-2 font-semibold">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={5}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      )}
    </div>
  );
};

export default InputField;
