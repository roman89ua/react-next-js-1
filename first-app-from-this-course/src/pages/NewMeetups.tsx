import React from "react";
import { Row } from "react-bootstrap";
import { AddMeetupsForm } from "../components/NewMeetups/AddMeetupsForm";
import { baseBEUrl } from "../api/endpoint";

export function NewMeetups() {
  const onSaveMeetupHandler = async (data: { [key: string]: string }) => {
    try {
      await fetch(`${baseBEUrl}meetups.json`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Row className="mt-4">
      <h2 className="text-center">Add new Meetup</h2>
      <AddMeetupsForm onSendData={onSaveMeetupHandler} />
    </Row>
  );
}
