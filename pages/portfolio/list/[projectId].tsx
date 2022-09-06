import { Row } from "react-bootstrap";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const { query } = useRouter();
  return (
    <Row>
      <h1 className="text-center">Project Page</h1>
      <p>Project id: {query.projectId}</p>
    </Row>
  );
};

export default ProjectPage;
