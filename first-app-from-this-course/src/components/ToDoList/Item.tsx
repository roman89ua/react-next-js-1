import React from "react";
import { Button, Card, Col } from "react-bootstrap";

export interface IToDoListItem {
  id: string;
  description?: string;
  title: string;
}

export interface IToDoListItemProp extends IToDoListItem {
  onDelete: (id: string) => void;
}

export const ToDoListItem = ({
  id,
  title,
  description = "",
  onDelete,
}: IToDoListItemProp) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          {description && <p>{description}</p>}
          <Button variant="primary" onClick={() => onDelete(id)}>
            Delete Button
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
