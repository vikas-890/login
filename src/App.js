import logo from "./logo.svg";
import "./App.css";
import SignUp from "./component/signUp/signUp";
import Login from "./component/login/login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" component={SignUp} />

        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
