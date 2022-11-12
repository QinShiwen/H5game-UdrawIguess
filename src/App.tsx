import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GameRoomHome } from "./pages/gameroom/Home";
import { LoginHome } from "./pages/main/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginHome />} />
        <Route path="/gameroom" element={<GameRoomHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
