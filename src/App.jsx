import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Master from "./components/layout/Master";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Home />} />
          <Route path="/book"  element={<Home />} />
          <Route path="/about"  element={<Home />} />
          <Route path="/contact"  element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
