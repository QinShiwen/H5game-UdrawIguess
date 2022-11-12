
import axios from "axios"

interface loginProps {
    email:string
    password:string
}

interface registerProps {
    email:string
    password:string
}

export const login =  async (email:string,pass:string)=>{
    let loginRequest = await axios({
        method: "post",
        url: "",
        data: {
          email,pass
        },
      });
}

export const register = async (email:string,pass:string,confirm:string)=>{
    let loginRequest = await axios({
        method: "post",
        url: "",
        data: {
          email,pass
        },
      });
}