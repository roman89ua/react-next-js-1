import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

export const PageNotFound = () => (
  <div className="page-not-found">
    <h1>Oops! Something went wrong</h1>
    <h1 className="page-not-found__404">404</h1>
    <h1>Page not found</h1>
    <Button variant="primary" href="/">
      Back Home
    </Button>
  </div>
);
