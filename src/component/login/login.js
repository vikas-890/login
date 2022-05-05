import React, { useState } from "react";
import { login } from "../../redux/actions/login.action";
import { useSelector, useDispatch } from "react-redux";
const FormObject = {
  name: "",
  password: "",
};
function Login() {
  const userStore = useSelector((state) => state.auth);
  const dispatcher = useDispatch();
  const [formObject, setFormObject] = useState(FormObject);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatcher(login(formObject));
  };

  const formHandler = (e) => {
    const object = {
      ...formObject,
      [e.target.name]: e.target.value,
    };
    setFormObject(object);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">UserName</label>
        <input
          type="text"
          name="name"
          value={formObject.name}
          onChange={formHandler}
        />
        <br />
        <label htmlFor="password">UserName</label>
        <input
          type="password"
          name="password"
          onChange={formHandler}
          value={formObject.password}
        />
        <br />
        <p>{userStore.error}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
