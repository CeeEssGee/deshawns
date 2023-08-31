import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { Cities } from "./scripts/Cities/Cities";
import { DogDetails } from "./scripts/Dogs/DogDetails";
import { Walkers } from "./scripts/Walkers/Walkers";
import { AddDog } from "./scripts/Dogs/AddDog";
import { WalkerAssignment } from "./scripts/Walkers/WalkerAssignment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/dogs/:dogId" element={<DogDetails />} />
        <Route path="/walkers" element={<Walkers />} />
        <Route path="/walkers/:walkerId" element={<WalkerAssignment />} />
        <Route path="/dogs/add" element={<AddDog />} />

      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
