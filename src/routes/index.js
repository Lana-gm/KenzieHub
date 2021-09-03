import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useEffect } from "react";
import Header from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  console.log("rotas", authenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <>
      <Header authenticated={authenticated} />
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Register authenticated={authenticated} />
        </Route>

        <Route path="/login">
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>

        <Route path="/home">
          <Home authenticated={authenticated} />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
