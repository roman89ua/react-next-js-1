import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Row>
      <Col>
        <h1 className="text-center">Home Page!</h1>

        <Link href="events">Events</Link>
      </Col>
    </Row>
  );
};

export default Home;
