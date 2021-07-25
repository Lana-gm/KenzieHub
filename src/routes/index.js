import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
