import React, { useState } from "react";
import styled from "styled-components";
import Icon, { SketchOutlined, MailFilled } from "@ant-design/icons";
import { login,register } from "./login"

export const LoginHome = () => {
  const [ifLogForm, setIfLogForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirm, setComfirm] = useState("");

  return (
    <Body>
      <TitileLayer>
        <div>YOU DRAW</div>
        <div>I GUESS</div>
      </TitileLayer>
      <Forms>
        {ifLogForm ? (
          <LoginForm>
            <SketchOutlined className="dimond-icon" />
            <div className="text-box">
              <div>Email Address</div>
              <div>
                <MailFilled />
                <input
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="text-box">
              <div>Password</div>
              <div>
                <MailFilled />
                <input
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={()=>login(email,password)}>Login</button>
            <a
              onClick={() => {
                setIfLogForm(!ifLogForm);
              }}
            >
              Register
            </a>
          </LoginForm>
        ) : (
          <RegisterForm>
            <div className="text-box">
              <div>Email Address</div>
              <div>
                <MailFilled />
                <input
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="text-box">
              <div>Password</div>
              <div>
                <MailFilled />
                <input
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="text-box">
              <div>Comfirm Password</div>
              <div>
                <MailFilled />
                <input
                  placeholder="comfirm password"
                  onChange={(e) => {
                    setComfirm(e.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={()=>register(email,password,comfirm)}>Register</button>
            <a
              onClick={() => {
                setIfLogForm(!ifLogForm);
              }}
            >
              Sign Up
            </a>
          </RegisterForm>
        )}
      </Forms>
    </Body>
  );
};

const Body = styled.div`
  background-image: linear-gradient(rgb(140 141 255) 0%, rgb(132 78 153) 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const TitileLayer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.6;

  font-size: 100px;
  font-weight: 800;
  color: #ffffff;
`;

const Forms = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-centent: center;
  align-items: center;
  float: right;
  flex: 0.4;

  .dimond-icon {
    font-size: 50px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    padding: 20px;
    margin-bottom: 20px;
    background-color: rgb(132 78 153 / 58%);
  }

  .text-box {
    width: 280px;
    padding: 10px 0 10px 20px;
    background-color: rgb(255, 255, 255);
    margin: 20px;
    border-radius: 10px;
    box-shadow: 10 10 10;
    font-size: 20px;
    box-shadow: 5px 5px 5px rgb(132 78 153 / 58%);
  }

  .text-box input {
    border: none;
    padding: 5px;
    outline: none;
    font-size: 18px;
    color: rgb(0, 0, 0);
  }

  button {
    background-color: rgb(132 78 153 / 58%);
    color: white;
    border: none;
    padding: 10px 0;
    outline: none;
    width: 200px;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 5px 5px 0 #ffffff;
    cursor: pointer;
  }

  a {
    color: rgb(54 0 75);
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const LoginForm = styled.div`
  height: 70vh;
  width: 400px;
  background-color: rgb(255, 255, 255, 0.5);
  margin-right: 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgb(132 78 153 / 58%);
`;

const RegisterForm = styled.div`
  height: 70vh;
  width: 400px;
  background-color: rgb(255, 255, 255, 0.5);
  margin-right: 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgb(132 78 153 / 58%);
`;
