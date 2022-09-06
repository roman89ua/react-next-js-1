import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Row>
      <h1 className="text-center">Home Page!</h1>
      <Col>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/blog/filters">Blog</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Home;
