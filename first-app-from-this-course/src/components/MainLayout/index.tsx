import React from "react";
import { Container } from "react-bootstrap";

import MainNavbar from "./MainNavbar";

interface IMainLayout {
  children: JSX.Element;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <main>
      <MainNavbar />
      <Container className="mx-auto my-0">{children}</Container>
    </main>
  );
};
