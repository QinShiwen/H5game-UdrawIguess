import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import


export const GamePrepare = () => {
  const [userState, setUserState] = useState(0);
  const [indentity, setIdentity] = useState(0);

  useEffect(() => {});

  return (
    <GameArea>
      {userState === 0 ? (
        <div>
          <div>you are the room host</div>
          <button>START GAME</button>
        </div>
      ) : (
        <div>
          <div>Wait for Admin to start the game</div>
        </div>
      )}
    </GameArea>
  );
};

const GameArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
