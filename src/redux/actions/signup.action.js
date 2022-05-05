import { SIGNUP_START,SIGNUP_FAIL,SIGNUP_SUCCESS } from "../constant.js";
import axios from "axios";
export const signup = async (user) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_START });
    try{
   const data = await axios.get("http://localhost:5000/users");
   const arr = data.users;
   let found=false;
    for (let a of arr) {
      if (a.name.localeCompare(user.name) === 0) {
       
      {
          found =true;
        dispatch({ type: SIGNUP_FAIL ,payload:{error:"userName exists"}});
      }
    }
    }
    if(!found)
    {
        await axios.post("http://localhost:5000/users",{name:user.name,password:user.password})
        dispatch({ type: SIGNUP_SUCCESS });
    }
}
catch(e)
{
    dispatch({ type: LOGIN_FAIL });
}
  }
}
