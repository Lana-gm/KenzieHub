import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import * as S from "./styles";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

export const FormLogin = ({ authenticated, setAuthenticated }) => {
  console.log("login 1", authenticated);

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
    axios
      .post("https://kenziehub.me/sessions", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.token);
        toast.success("Sucesso ao logar!");
        setAuthenticated(true);
        history.push("/home");
      })
      .catch((e) => toast.error("Falha ao logar. Verifique seus dados."));
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <S.PageContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <S.ContainerForm>
          <h3>Faça seu login</h3>
          <TextField
            label="E-mail"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helpertext={errors.email?.message}
          />

          <TextField
            label="Senha"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helpertext={errors.password?.message}
          />

          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </S.ContainerForm>
      </form>
      <S.ContainerImage></S.ContainerImage>
    </S.PageContainer>
  );
};
