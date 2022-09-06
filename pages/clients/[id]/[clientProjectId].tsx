import { Row } from "react-bootstrap";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SingleClientProjectPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Row>
      <h1 className="text-center">Single Client Project Page</h1>
      <p>{`Client with id: ${query?.id || ""} own  project id: ${
        query?.clientProjectId || ""
      }`}</p>
    </Row>
  );
};
export default SingleClientProjectPage;
