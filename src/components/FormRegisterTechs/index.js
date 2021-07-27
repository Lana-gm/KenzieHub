import { Button, TextField, Select, MenuItem } from "@material-ui/core";
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

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.me/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTechs([...techs, res.data]))
      .catch((e) => console.log(e));
  };

  const removeTech = (value) => {
    const newListTech = techs.filter((_, index) => index !== value);
    setTechs(newListTech);
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
            />
          </S.InputBox>
          <S.InputBox>
            <Select
              value={level}
              {...register("status")}
              onChange={handleChange}
            >
              <MenuItem selected value="Iniciante">
                Iniciante
              </MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </Select>
          </S.InputBox>

          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </S.ContainerBox>
      </form>

      <ul>
        {techs.map(({ status, title }, index) => (
          <li key={index}>
            <span>Title: {title}</span> <br />
            <span>Status: {status}</span>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeTech(index)}
            >
              Excluir
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormRegisterTechs;
