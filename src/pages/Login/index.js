import { FormLogin } from "../../components/FormLogin";
import { Redirect } from "react-router-dom";
import * as S from "./styles";

const Login = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <S.Title>Faça seu login</S.Title>
      <FormLogin
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </>
  );
};

export default Login;
