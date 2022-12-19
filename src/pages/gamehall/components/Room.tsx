import React from "react";
import styled from "styled-components";
import Avatar from "../../../assets/logo512.png";

interface RoomProps{
  roomId:string,
  roomName:string
}

export const Room = ({roomId,roomName}:RoomProps) => {

  function enterRoom(){
    
  }

  return (
    <RoomBox>
      <img src={Avatar} width={100} />
      <div>
        <h2>{roomName}</h2>
        <div>
          <button onClick={enterRoom}>Enter</button>
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
  height:150px;
  width:50vw;

  h2{
    margin:10px 0;
  }
  img{
    margin:0 20px;

  }
`;
