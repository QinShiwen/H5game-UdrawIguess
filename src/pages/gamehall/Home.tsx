import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../assets/logo512.png";
import { Row, Col } from "antd";
import { Room } from "./components/Room";

export const GameHall = () => {
  function createRoom() {}

  useEffect(() => {});
  return (
    <Container>
      <div className="create-room">create</div>
      <Header>
        <img src={Avatar} width={30} height={30} />
        <span>test</span>
      </Header>
      <Body>
          {[1, 2, 3, 4, 4, 4, 4, 4, 4].map((item, index) => {
            return <Room />;
          })}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(rgb(140 141 255) 0%, rgb(132 78 153) 100%);
  

  .create-room {
    position: absolute;
  }
`;

const Header = styled.div`
  position: fixed;
  height: 100vh;
  width:200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: white;
  img {
    margin: 0 10px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-left:200px;
  overflow-y: scroll;
`;

const GameRooms = styled.div`
  padding: 20px 30px;
`;
