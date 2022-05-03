import React, { useState } from "react";
import { signUp } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
const FormObject = {
  name: "",
  password: "",
};
function SignUp() {
  const userStore = useSelector((state) => state.auth);
  console.log(userStore, "-----------------");
  const dispatcher = useDispatch();
  const [formObject, setFormObject] = useState(FormObject);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatcher(signUp(formObject));
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
