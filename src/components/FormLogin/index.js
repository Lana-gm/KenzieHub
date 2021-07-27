import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import * as S from "./styles";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const FormLogin = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios.post("https://kenziehub.me/sessions", data).then((response) => {
      localStorage.clear();
      localStorage.setItem("token", response.data.token);
      setAuthenticated(true);
      history.push("/home");
    });
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <S.ContainerBox>
        <S.InputBox>
          <TextField
            label="E-mail"
            variant="outlined"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </S.InputBox>
        <S.InputBox>
          <TextField
            label="Senha"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </S.InputBox>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </S.ContainerBox>
    </form>
  );
};
