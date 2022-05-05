import React, { useState } from "react";
import { signup } from "../../redux/actions/signup.action";
import { useSelector, useDispatch } from "react-redux";
const FormObject = {
  name: "",
  password: "",
};
function SignUp() {
  const userStore = useSelector((state) => state.auth);

  const dispatcher = useDispatch();
  const [formObject, setFormObject] = useState(FormObject);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatcher(signup(formObject));
    setFormObject({
      name: "",
      password: "",
    });
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
        <button type="submit">Submit</button>
      </form>
      <p>{userStore.error}</p>
    </div>
  );
}

export default SignUp;
