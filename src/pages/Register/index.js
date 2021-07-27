import { FormRegister } from "../../components/FormRegister";
import { Redirect } from "react-router-dom";
import * as S from "./styles";

const Register = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <S.Title>Faça seu cadastro</S.Title>
      <FormRegister />
    </>
  );
};

export default Register;
