import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import * as S from "./styles";

export const FormLogin = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    // axios
    //   .post("https://kenziehub.me/users", data)
    //   .then((res) => {
    //     history.push("/login");
    //   })
    //   .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
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
    </form>
  );
};