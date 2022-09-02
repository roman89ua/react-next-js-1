import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AllMeetups, Favourites, NewMeetups, PageNotFound } from "./pages";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="favourites" element={<Favourites />} />
        <Route path="newMeetups" element={<NewMeetups />} />
        <Route path="/" element={<AllMeetups />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
