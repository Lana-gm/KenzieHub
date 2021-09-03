import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import * as S from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

export const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.me/users", data)
      .then((res) => {
        toast.success("Sucesso ao cadastrar sua conta!");
        history.push("/login");
      })
      .catch((e) => toast.error("Falha ao cadastrar, verifique seus dados."));
  };

  return (
    <S.PageContainer>
      <S.ContainerImage></S.ContainerImage>
      <form onSubmit={handleSubmit(handleForm)}>
        <S.ContainerForm>
          <h3>Faça seu cadastro</h3>

          <TextField
            label="Nome"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helpertext={errors.name?.message}
          />
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
            label="Bio"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            {...register("bio")}
            error={!!errors.bio}
            helpertext={errors.bio?.message}
          />
          <TextField
            label="Contato"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            {...register("contact")}
            error={!!errors.contact}
            helpertext={errors.contact?.message}
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
          <TextField
            label="Módulo do curso"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            {...register("course_module")}
            error={!!errors.course_module}
            helpertext={errors.course_module?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </S.ContainerForm>
      </form>
    </S.PageContainer>
  );
};
