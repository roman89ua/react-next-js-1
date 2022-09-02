import React from "react";
import { IMeetupsItem, MeetupItem } from "../MeetupItem";

interface IMeetupsListProps {
  meetupsList: IMeetupsItem[];
}

const MeetupsList = ({ meetupsList }: IMeetupsListProps) => (
  <>
    {meetupsList.map((meetup) => (
      <MeetupItem key={meetup.id} {...meetup} />
    ))}
  </>
);

export default MeetupsList;
