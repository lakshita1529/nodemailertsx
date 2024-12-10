
import Preview from "../../views/PreviewView";

interface PreviewContainerProps {
  message: string;
  togglePreview: () => void;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ message, togglePreview }) => {
  return (
    <Preview
      message={message}
      togglePreview={togglePreview}
    />
  );
};

export default PreviewContainer;
