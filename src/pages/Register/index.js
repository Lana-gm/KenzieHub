import { FormRegister } from "../../components/FormRegister";
import { Redirect } from "react-router-dom";

const Register = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return <FormRegister />;
};

export default Register;
