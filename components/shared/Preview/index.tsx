import Button from "../../base/Button";

interface PreviewProps {
  message: string;
  togglePreview: () => void;
}

const Preview: React.FC<PreviewProps> = ({ message, togglePreview }) => {
  return (
    <div className="mt-6 p-6 w-full bg-white border border-gray-300 rounded-md shadow-lg">
      <h3 className="text-xl font-bold mb-4">Email Preview:</h3>
      <div className="prose mb-4" dangerouslySetInnerHTML={{ __html: message }} />
      <Button type="button" onClick={togglePreview} className="bg-yellow-500 w-full">
        Close Preview
      </Button>
    </div>
  );
};

export default Preview;
