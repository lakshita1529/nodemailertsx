import Button from "../../base/Button";

interface Template {
  email: string;
  subject: string;
  message: string;
  id: number;
}

interface TemplateListProps {
  templates: Template[];
  loadTemplate: (template: Template) => void;
  deleteTemplate: (id: number) => void;
}

const TemplateList: React.FC<TemplateListProps> = ({ templates, loadTemplate, deleteTemplate }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Saved Templates:</h2>
      {templates.length === 0 ? (
        <p className="text-gray-600">No saved templates yet.</p>
      ) : (
        templates.map((template) => (
          <div key={template.id} className="border p-4 mb-4 bg-white rounded shadow-sm">
            <p className="font-semibold">To: {template.email}</p>
            <p className="font-semibold">Subject: {template.subject}</p>
            <div className="prose mt-2" dangerouslySetInnerHTML={{ __html: template.message }} />
            <div className="flex space-x-4 mt-4">
              <Button type="button" onClick={() => loadTemplate(template)} className="bg-blue-500">
                Load Template
              </Button>
              <Button type="button" onClick={() => deleteTemplate(template.id)} className="bg-red-500">
                Delete Template
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TemplateList;
