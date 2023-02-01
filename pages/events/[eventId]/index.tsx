import React from "react";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

const EventItemPage = () => {
  const { query } = useRouter();
  return (
    <Row>
      <Col>
        <h2>Event Item Page</h2>
        <p>id: {query.eventId}</p>
      </Col>
    </Row>
  );
};

export default EventItemPage;
