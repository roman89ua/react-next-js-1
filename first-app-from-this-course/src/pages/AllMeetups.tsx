import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import MeetupsList from "../components/Meetups/MeetupsList";
import { IMeetupsItem } from "../components/Meetups/MeetupItem";
import { fireBaseGetRequestDataTransform } from "../api";
import { baseBEUrl } from "../api/endpoint";

export function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [meetups, setMeetups] = useState<IMeetupsItem[]>([]);

  const fetchData = () => {
    setIsLoading(true);
    fetch(`${baseBEUrl}meetups.json`)
      .then((response) => response.json())
      .then((meetupsData) => {
        setMeetups(fireBaseGetRequestDataTransform(meetupsData));
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <Row className="mt-5">
        <Col className="mt-5 d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
        </Col>
      </Row>
    );

  return (
    <Row>
      <MeetupsList meetupsList={meetups} />
    </Row>
  );
}
