import { useEffect, useState } from "react";
import { WebsocketBuilder } from "websocket-ts";

import axios from "axios";

interface gameRule {
  gameState: string;
  players: any;
  roomID: string;
}

interface playerProp {
  id: string;
  name: string;
}

export const GameLogic = () => {
  const ws = new WebsocketBuilder("localhost:3000");
  //record the left drawing time
  const [gameTimer, setgameTimer] = useState(100);
  //start, gametime, end
  const [gameState, setGameState] = useState("");
  const [players, setPlayers] = useState<any>([]);

  function enterMember(player: playerProp) {
    setPlayers(players.push(player));
  }

  function leaveMember(player: playerProp) {
    let index = players.indexOf();
    setPlayers(players.slice(index, 1));
  }

  function startgame(canvas: HTMLCanvasElement) {
    setGameState("gametime")
  }

  function drawCanvas(e: EventTarget) {
    ws.onMessage((i, e) => {
      i.send("");
    });
  }

  function clearCanvas() {
    ws.onMessage((i, e) => {
      i.send("");
    });
  }

  useEffect(() => {
    ws.build();
  });

  return {};
};
