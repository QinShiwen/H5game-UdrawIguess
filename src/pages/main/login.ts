import axios from "axios";

export const login = async (email: string, pass: string) => {
  console.log(email, pass);
  if (email.length< 1 && pass.length < 1) {
    alert("请完成信息填写");
    return;
  }
  axios
    .post("http://207.148.104.9:9001", {
      email: email,
      pass: pass,
    })
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const register = async (
  email: string,
  pass: string,
  confirm: string
) => {
  if (email.length< 1 && pass.length < 1 && confirm.length < 1) {
    alert("请完成信息填写");
    return;
  }
  axios
    .post("http://207.148.104.9:9001", {
      email: email,
      pass: pass,
      confirm:confirm
    })
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};
