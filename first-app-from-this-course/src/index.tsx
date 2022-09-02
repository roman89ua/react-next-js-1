import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";

import "./index.css";
import App from "./App";
import {FavouritesContextProvider} from "./contexts/FavouritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </FavouritesContextProvider>
);
