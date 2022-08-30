import React from "react";
import { IToDoListItem, ToDoListItem } from "./Item";
import { Row } from "react-bootstrap";

export interface IToDoList {
  items: IToDoListItem[];
  onDelete: (id: string) => void;
}

export const ToDoList = ({ items, onDelete }: IToDoList) => {
  return (
    <Row>
      {items?.map((listItem) => (
        <ToDoListItem key={listItem.id} {...listItem} onDelete={onDelete} />
      ))}
    </Row>
  );
};
