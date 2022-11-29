import React from "react";
import styled from "styled-components";
import Avatar from "../../../assets/logo512.png";
export const Room = () => {
  return (
    <RoomBox>
      <img src={Avatar} width={100} />
      <div>
        <div>room</div>
        <div>
          <button>Enter</button>
        </div>
      </div>
    </RoomBox>
  );
};

const RoomBox = styled.span`
  margin: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  height:200px;
  width:50vw;
`;
