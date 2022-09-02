import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { FavouritesContext } from "../contexts/FavouritesContext";
import MeetupsList from "../components/Meetups/MeetupsList";

export function Favourites() {
  const { favourites, totalFavourites } = useContext(FavouritesContext);

  const content = !!totalFavourites ? (
    <MeetupsList meetupsList={favourites} />
  ) : (
    <p className="text-center my-4">
      You don't have favourites yet. You can add it from All Meetups tub.
    </p>
  );

  return (
    <Row className="my-4">
      <h2 className="text-center">Favourites Meetups</h2>
      <Col>{content}</Col>
    </Row>
  );
}
