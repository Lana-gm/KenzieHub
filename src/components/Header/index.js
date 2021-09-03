import { Toolbar, MenuItem } from "@material-ui/core";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

const Header = ({ authenticated }) => {
  console.log("header", authenticated);
  const history = useHistory();

  return (
    <S.Header>
      {!authenticated ? (
        <Toolbar>
          <MenuItem onClick={() => history.push("/")}>Cadastro</MenuItem>
          <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>
        </Toolbar>
      ) : (
        <Toolbar>
          <MenuItem onClick={() => history.push("/")}>Cadastro</MenuItem>
          <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>
          <MenuItem onClick={() => history.push("/home")}>Home</MenuItem>
        </Toolbar>
      )}
    </S.Header>
  );
};

export default Header;
