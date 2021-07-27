import FormRegisterTechs from "../../components/FormRegisterTechs";
import { Redirect } from "react-router-dom";

const Home = ({ authenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <FormRegisterTechs />
    </>
  );
};

export default Home;
