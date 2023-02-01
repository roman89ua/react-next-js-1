import React from "react";
import { Col, Row } from "react-bootstrap";
import EventCardList from "../../components/EventsCardsList/List";
import { getAllEvents } from "../../DEFAULT_DATA";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <Row>
      <Col>
        <h2>All Events page</h2>
        <EventCardList listTitle="Event List" events={events} />
      </Col>
    </Row>
  );
};

export default EventsPage;
