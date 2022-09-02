import React, { useContext } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../../contexts/FavouritesContext";

const MainNavbar = () => {
  const { totalFavourites } = useContext(FavouritesContext);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="sticky-top d-flex justify-content-center align-items-center"
    >
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>Meetups</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar-nav">
            <Link to="/" className="text-decoration-none">
              <Nav.Link href="/" className="m-0">
                All meetups
              </Nav.Link>
            </Link>
            <Link to="favourites" className="text-decoration-none relative">
              <Nav.Link
                href="/favourites"
                className={`m-0 ${!!totalFavourites && ""}`}
              >
                Favourites
                {!!totalFavourites && (
                  <Badge bg="light text-dark mx-2">{totalFavourites}</Badge>
                )}
              </Nav.Link>
            </Link>
            <Link to="newMeetups" className="text-decoration-none">
              <Nav.Link href="/newMeetups" className="m-0">
                New Meetups
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
