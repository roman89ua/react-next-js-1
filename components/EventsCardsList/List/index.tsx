import { ListGroup } from "react-bootstrap";
import EventCard, { IEventCard } from "../EventCard";
import React from "react";

interface IEventCardList {
  listTitle: string;
  events: IEventCard[];
}

function EventCardList({ events = [], listTitle = "" }: IEventCardList) {
  if (!events?.length) {
    return null;
  }

  return (
    <ListGroup title={listTitle}>
      {events.map((event) => (
        <ListGroup.Item key={event.id} className="border border-0">
          <EventCard {...event} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default EventCardList;
