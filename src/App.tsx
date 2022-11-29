import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GameRoomHome } from "./pages/gameroom/Home";
import { LoginHome } from "./pages/main/Home";
import { GameHall } from "./pages/gamehall/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginHome />} />
        <Route path="/gameroom" element={<GameRoomHome />} />
        <Route path="/gamehall" element={<GameHall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
