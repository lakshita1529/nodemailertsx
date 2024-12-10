
interface EmailFormProps {
  email: string;
  subject: string;
  message: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  togglePreview: () => void;
  saveTemplate: () => void;
}

const EmailForm: React.FC<EmailFormProps> = ({
  email,
  subject,
  message,
  setEmail,
  setSubject,
  setMessage,
  handleSubmit,
  togglePreview,
  saveTemplate,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-group">
        <label className="block text-gray-700">
          Recipient Emails (comma-separated):
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700">Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="form-group">
        <label className="block text-gray-700">
          Message (HTML content allowed):
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
        />
      </div>

      <div className="button-group mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <button
          type="button"
          onClick={togglePreview}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full"
        >
          Preview Email
        </button>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full"
        >
          Send Email
        </button>
        <button
          type="button"
          onClick={saveTemplate}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full"
        >
          Save Template
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
