import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../assets/logo512.png";
//import 'antd/dist/reset.css';
import { Modal, Input, Button } from "antd";
import { Room } from "./components/Room";
import { data } from "./data";

export const GameHall = () => {
  const [rooms, setRooms] = useState(data["rooms"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function createRoom() {
    setIsModalOpen(false);
  }

  useEffect(() => {});

  return (
    <Container>
      <Modal
        title="Create Room"
        open={isModalOpen}
        onOk={createRoom}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <Input placeholder="room name" />
      </Modal>
      <Header>
        <img src={Avatar} width={30} height={30} />
        <h1>test</h1>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
          type="primary"
          shape={"round"}
        >
          Create Room
        </Button>
      </Header>
      <Body>
        {rooms.map((item, index) => {
          return <Room roomId={item.roomId} roomName={item.roomName} />;
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
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  img {
    margin: 0 10px;
    width: 100px;
    height: 100px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-left: 200px;
  overflow-y: scroll;
`;

const GameRooms = styled.div`
  padding: 20px 30px;
`;
