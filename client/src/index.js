import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { DogForm } from "./scripts/Dogs/DogForm";
import { DogDetails } from "./scripts/Dogs/DogDetails";
import { Walkers } from "./scripts/Walkers/Walkers";
import { AddDog } from "./scripts/Dogs/AddDog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/walkers" element={<WalkerList />} />
        <Route path="/walkers/:walkerId" element={<WalkerDog />} />
        <Route path="/addDog" element={<DogForm />} />
        <Route path="/dogs/:dogId" element={<DogDetails />} />
        <Route path="/walker/:walkerId" element={<WalkerDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();