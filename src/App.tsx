<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GameRoomHome } from "./pages/gameroom/Home";
import { LoginHome } from "./pages/main/Home";

function App() {
  return <LoginHome />;
>>>>>>> c72a27e (feature/login)
}

export default App;
