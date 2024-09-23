
import SaveTemplate from "../../views/SaveTemplateView";

interface Template {
  email: string;
  subject: string;
  message: string;
  id: number;
}

interface SaveTemplateContainerProps {
  templates: Template[];
  loadTemplate: (template: Template) => void;
  deleteTemplate: (id: number) => void;
}

const SaveTemplateContainer: React.FC<SaveTemplateContainerProps> = ({
  templates,
  loadTemplate,
  deleteTemplate,
}) => {
  return (
    <SaveTemplate
      templates={templates}
      loadTemplate={loadTemplate}
      deleteTemplate={deleteTemplate}
    />
  );
};

export default SaveTemplateContainer;
