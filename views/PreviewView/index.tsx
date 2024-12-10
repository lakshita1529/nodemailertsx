

interface PreviewProps {
  message: string;
  togglePreview: () => void;
}

const Preview: React.FC<PreviewProps> = ({ message, togglePreview }) => {
  return (
    <div className="bg-white p-8 shadow-md rounded-md w-full max-w-lg mt-6">
      <h3 className="text-xl font-bold mb-4">Email Preview:</h3>
      <div className="preview-box border p-4 bg-gray-50 rounded-md">
        {/* The email content will be rendered here */}
        <iframe
          srcDoc={message}
          title="Email Preview"
          className="w-full h-80"
          style={{
            border: "none",
            overflow: "auto",
            backgroundColor: "white",
          }}
        />
      </div>

      <button
        onClick={togglePreview}
        className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-md"
      >
        Close Preview
      </button>
    </div>
  );
};

export default Preview;
