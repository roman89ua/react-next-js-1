import React, { useEffect, useState } from "react";
import "./App.css";
import { IToDoListItem, ToDoList } from "./components/ToDoList";
import { Container } from "react-bootstrap";
import { ConfirmModal } from "./components/Modal/ConfirmModal";

const items: IToDoListItem[] = [
  {
    id: "1",
    title: "Title 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem
      culpa cupiditate dolore doloribus esse est fuga ipsa, laudantium
      magnam sunt?`,
  },
  {
    id: "2",
    title: "Title 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem
      culpa cupiditate dolore doloribus esse est fuga ipsa, laudantium
      magnam sunt?`,
  },
  {
    id: "3",
    title: "Title 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem
      culpa cupiditate dolore doloribus esse est fuga ipsa, laudantium
      magnam sunt?`,
  },
  {
    id: "4",
    title: "Title 4",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem
      culpa cupiditate dolore doloribus esse est fuga ipsa, laudantium
      magnam sunt?`,
  },
];

function App() {
  const [state, setState] = useState<IToDoListItem[]>([]);
  const [isConfModDisplayed, setIsConfModDisplayed] = useState(false);
  const [currentListItemId, setId] = useState("");

  useEffect(() => {
    setState(items);
  }, []);

  const onListItemDelete = (itemId: string) => {
    setState(state.filter((item) => itemId !== item?.id));
  };

  const onModalClose = () => {
    setIsConfModDisplayed(false);
  };

  const onModalOpen = () => {
    setIsConfModDisplayed(true);
  };

  const onDelete = (id: string) => {
    setId(id);
    onModalOpen();
  };

  return (
    <div className="App">
      <Container>
        <h1>Todos</h1>
        <ToDoList items={state} onDelete={onDelete} />
        <ConfirmModal
          onConfirm={() => onListItemDelete(currentListItemId)}
          onShow={onModalOpen}
          onHide={onModalClose}
          show={isConfModDisplayed}
        />
      </Container>
    </div>
  );
}

export default App;
