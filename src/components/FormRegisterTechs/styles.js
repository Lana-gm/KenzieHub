import styled from "styled-components";
import { Select, Button } from "@material-ui/core";

export const SelectStyled = styled(Select)`
  width: 150px;
  margin-top: 10px;
`;

export const ButtonStyled = styled(Button)`
  background-color: tomato !important;
  height: 30px !important;
  color: white !important;
`;

export const InputBox = styled.div`
  margin: 20px;

  select {
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 38vh;
  margin-top: 20px;
  width: 300px;
  background-color: whitesmoke;
  border-radius: 8px;

  @media (min-width: 992px) {
    height: 30vh;
  }
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ContainerCard = styled.li`
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 10px;
  margin: 30px;
  width: 222px;
  margin-right: 20px;
  background-color: ghostwhite;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;

  span {
    margin: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  text-align: center;
`;
