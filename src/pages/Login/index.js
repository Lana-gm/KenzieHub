import { FormLogin } from "../../components/FormLogin";
import { Redirect } from "react-router-dom";

const Login = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <FormLogin
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
};

export default Login;
