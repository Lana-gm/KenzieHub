import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
