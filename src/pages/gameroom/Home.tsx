import React, {useEffect,useState} from "react";
import { Card, Progress, Input, Button, Space, Image } from "antd";
import testImage from "../../assets/logo512.png";
import styled from "styled-components";

interface project {
  users: any[];
  levels: number;
}

export function GameRoomHome() {

    const [gameTimer,setgameTimer] = useState(100);
    const [gameState,setGameState] = useState("")
    function ticker(){
        setTimeout(()=>{
            setgameTimer(gameTimer-1)
            console.log(gameTimer)
        },1000)
    }

    useEffect(()=>{
        //ticker()

    })

  return (
    <Body>
      <Container>
        <LeftRank>
          <h1>Name and Rank</h1>
          <Card>
            <Space>
              <div className="user">
                <Image width={50} src={testImage} placeholder="true" />
                <span style={{ fontSize: "20px", margin: "0 20px" }}>
                  user name
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    flex: "0.2",
                    float: "right",
                    margin: "0 10px",
                  }}
                >
                  0
                </span>
              </div>
              <div className="user">
                <Image width={50} src={testImage} placeholder="true" />
                <span style={{ fontSize: "20px", margin: "0 20px" }}>
                  user name
                </span>
                <span
                  style={{
                    fontSize: "30px",
                    flex: "0.2",
                    float: "right",
                    margin: "0 10px",
                  }}
                >
                  0
                </span>
              </div>
            </Space>
          </Card>
        </LeftRank>
        <GameArea>
          <CanvasBorad>
            <Progress type={"line"} percent={(gameTimer)} showInfo={false} />
            <div className="canvas"></div>
            <div className="tool-bar"></div>
          </CanvasBorad>
          <AnswerBoard>
            <h1>60</h1>
            <div className="chat">
              <div className="chat-box"></div>
              <span className="answer-box">
                <Input placeholder="input search text" />
                <Button>submit</Button>
              </span>
            </div>
            <span className="leave">
              <Button>Leave</Button>
            </span>
          </AnswerBoard>
        </GameArea>
      </Container>
    </Body>
  );
}

const Body = styled.div`
  background-image: linear-gradient(rgb(140 141 255) 0%, rgb(132 78 153) 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgb(255, 255, 255, 0.3);
  padding: 10px 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//左边积分排行
const LeftRank = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .user {
    margin: 10px 20px;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid rgb(0 0 0 / 40%);
  }

  .ant-card {
    width: 300px;
    height: 75vh;
    background: rgb(0 0 0 / 10%);
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h1 {
    line-height: 15px;
    color: #920000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .ant-image-mask {
    display: none;
  }
`;

const GameArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CanvasBorad = styled.div`
  background: rgb(0 0 0 / 25%);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .ant-progress {
    padding: 5px;
  }

  .ant-progress-inner {
    border-radius: 20px;
    border: 2px solid rgb(255, 255, 255, 0.8);
  }

  .ant-progress-bg {
    //background-image:linear-gradient(rgb(0 0 0 / 25%) 0%,rgb(132 78 153) 100%);
    background-color: rgb(255, 255, 255, 0.8);
  }

  .canvas {
    width: 800px;
    height: 400px;
    background: #ffffff;
  }

  .tool-bar {
    height: 40px;
  }
`;

const AnswerBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .chat {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .chat-box {
    height: 100px;
    width: 400px;
    background-color: rgb(0 0 0 / 10%);
    border-radius: 10px 10px 0 0;
  }

  .answer-box {
    border-radius: 0 0 10px 10px;
    height: 50px;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 25%);
  }

  .answer-box input {
    padding: 0px 0px 0px 20px;
    font-size: 18px;
    width: 300px;
    height: 40px;
    border-radius: 20px 0 0 20px;
    border: none;
    outline: none;
    transition: 0.5s;
    background-color: rgb(0 0 0 / 25%);
  }

  .answer-box input:focus {
    background-color: rgb(255 255 255 / 70%);
    transition: 0.5s;
  }

  .answer-box button {
    width: 100px;
    height: 40px;
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    font-size: 18px;
    background-color: rgb(0 0 0 / 40%);
    color: white;
  }

  h1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(0 0 0 / 40%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    color: white;
    transition: 0.5s;
  }

  h1:hover {
    transition: 0.5s;
    width: 120px;
    height: 120px;
  }

  .leave button {
    color: rgb(0 0 0 / 60%);
    font-weight: bold;
    font-size: 20px;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    background-image: linear-gradient(
      rgb(0 0 0 / 25%) 0%,
      rgb(132 78 153) 100%
    );
    outline: none;
    border: 0;
    cursor: pointer;
    transition: 0.5s;
    margin: 0 0 0 40px;
  }

  .leave button:hover {
    width: 180px;
    height: 60px;
    transition: 0.5s;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
