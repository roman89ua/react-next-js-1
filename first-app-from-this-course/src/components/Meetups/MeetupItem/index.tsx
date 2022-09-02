import React, { useContext } from "react";
import { Button, Card, Col, Ratio } from "react-bootstrap";
import { FavouritesContext } from "../../../contexts/FavouritesContext";

export interface IMeetupsItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const MeetupItem = ({ description, id, image, title }: IMeetupsItem) => {
  const { itemIsFavourite, onAddFavourite, onDeleteFavourite } =
    useContext(FavouritesContext);

  const isInFavourites = itemIsFavourite(id);

  const onAddToFavouritesHandler = () => {
    isInFavourites
      ? onDeleteFavourite(id)
      : onAddFavourite({ description, id, image, title });
  };

  return (
    <Col xs={12} className="py-3">
      <Card className="w-100">
        <Ratio aspectRatio="21x9">
          <Card.Img variant="top" src={image} alt={title} />
        </Ratio>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="outline-dark"
            className="mt-3"
            onClick={onAddToFavouritesHandler}
          >
            {`${isInFavourites ? "Remove from" : "Add to"} favourites`}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
