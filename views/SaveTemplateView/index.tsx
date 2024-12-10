

interface Template {
  email: string;
  subject: string;
  message: string;
  id: number;
}

interface SaveTemplateProps {
  templates: Template[];
  loadTemplate: (template: Template) => void;
  deleteTemplate: (id: number) => void;
}

const SaveTemplate: React.FC<SaveTemplateProps> = ({
  templates,
  loadTemplate,
  deleteTemplate,
}) => {
  return (
    <div className="saved-templates">
      {templates.length === 0 && <p>No saved templates yet.</p>}
      {templates.map((template) => (
        <div
          key={template.id}
          className="p-4 mb-4 bg-white shadow-md rounded-md border"
          style={{ maxWidth: "400px" }}
        >
          <p className="font-bold">To: {template.email}</p>
          <p className="font-bold">Subject: {template.subject}</p>
          <div
            className="iframe-like-content my-2 p-2 border bg-gray-100 rounded"
            style={{
              overflow: "auto",
              maxHeight: "150px",
              whiteSpace: "pre-wrap",
            }}
            dangerouslySetInnerHTML={{ __html: template.message }}
          />

          <div className="flex justify-between mt-2">
            <button
              onClick={() => loadTemplate(template)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Load Template
            </button>
            <button
              onClick={() => deleteTemplate(template.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Delete Template
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaveTemplate;
