import React from "react";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const { query } = useRouter();

  console.log(query);
  return (
    <Row>
      <Col>
        <h2>Filtered events page</h2>
      </Col>
    </Row>
  );
};

export default FilteredEventsPage;
