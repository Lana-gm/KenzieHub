import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";

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
  }, []);

  const [level, setLevel] = useState("");

  const handleChange = (e) => setLevel(e.target.value);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
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
      .catch((e) => console.log(e));
  };

  const removeTech = (id) => {
    axios
      .delete(`https://kenziehub.me/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((e) => console.log(e));
    const newTechs = techs.filter((tech) => tech.id !== id);
    setTechs(newTechs);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.ContainerBox>
          <S.InputBox>
            <TextField
              label="Cadastre sua tecnologia"
              variant="outlined"
              size="small"
              color="primary"
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </S.InputBox>
          <S.InputBox>
            <Select
              value={level}
              {...register("status")}
              onChange={handleChange}
            >
              <MenuItem value="Iniciante">Iniciante</MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </Select>
          </S.InputBox>

          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </S.ContainerBox>
      </form>

      <S.ContainerList>
        {techs.map(({ status, title, id }, index) => (
          <S.ContainerCard key={index}>
            <span>Tecnologia: {title}</span>
            <span>Status: {status}</span>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => removeTech(id)}
            >
              Excluir
            </Button>
          </S.ContainerCard>
        ))}
      </S.ContainerList>
    </>
  );
};

export default FormRegisterTechs;
