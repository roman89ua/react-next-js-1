import { Col, Row } from "react-bootstrap";
import { NextPage } from "next";

const PageNotFound: NextPage = () => (
  <Row>
    <Col className="text-center w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <h2 className="">Oooops! Something went wrong</h2>
      <p className="text-danger h1">
        <strong>404</strong>
      </p>
      <p className="h2">Page not found</p>
    </Col>
  </Row>
);

export default PageNotFound;
