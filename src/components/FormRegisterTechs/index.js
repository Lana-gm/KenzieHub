import { Button, TextField, MenuItem } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

const FormRegisterTechs = () => {
  const [techs, setTechs] = useState([]);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://kenziehub.me/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTechs(res.data.techs))
      .catch((e) => console.log(e));
  }, [token]);

  const [level, setLevel] = useState("");

  const handleChange = (e) => setLevel(e.target.value);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.me/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTechs([...techs, res.data]))
      .catch((e) =>
        toast.error(
          "Erro as cadastrar tecnologia, verifique se a tecnologia já é existente."
        )
      );
  };

  const removeTech = (id) => {
    axios
      .delete(`https://kenziehub.me/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((e) => toast.error("Falha ao deletar tecnologia"));
    const newTechs = techs.filter((tech) => tech.id !== id);
    setTechs(newTechs);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.ContainerForm>
          <S.InputBox>
            <TextField
              label="Cadastre sua tecnologia"
              variant="outlined"
              size="small"
              color="primary"
              {...register("title")}
              error={!!errors.title}
              helpertext={errors.title?.message}
            />
          </S.InputBox>
          <S.InputBox>
            <label>Selecione seu nível:</label>
            <S.SelectStyled
              value={level}
              {...register("status")}
              onChange={handleChange}
              error={!!errors.status}
              helpertext={errors.status?.message}
            >
              <MenuItem value="Iniciante">Iniciante</MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </S.SelectStyled>
          </S.InputBox>

          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </S.ContainerForm>
      </S.Form>

      <S.ContainerList>
        {techs.map(({ status, title, id }, index) => (
          <S.ContainerCard key={index}>
            <span>Tecnologia: {title}</span>
            <span>Status: {status}</span>
            <S.ButtonStyled
              size="small"
              variant="contained"
              onClick={() => removeTech(id)}
            >
              Excluir
            </S.ButtonStyled>
          </S.ContainerCard>
        ))}
      </S.ContainerList>
    </>
  );
};

export default FormRegisterTechs;
