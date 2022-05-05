import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from "../constant.js";
import axios from "axios";
export const login = async (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    try{
   const data = await axios.get("http://localhost:5000/users");
   const arr = data.users;
   let found =false;
    for (let a of arr) {
      if (a.name.localeCompare(user.name) === 0) {
         if (a.password.localeCompare(user.password) === 0)
      {
          found =true;
        dispatch({ type: LOGIN_SUCCESS ,payload:{userName:a.name}});
      }
    }
    }
    if(!found)
    {
        dispatch({ type: LOGIN_FAIL });
    }
}
catch(e)
{
    dispatch({ type: LOGIN_FAIL });
}
  }
}
