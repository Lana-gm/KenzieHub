import styled from "styled-components";
import fundoregisterhub from "../../assets/img/fundoregisterhub.svg";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  width: 252px;
  height: 500px;
  border-radius: 8px;

  h3 {
    text-align: center;
  }

  @media (min-width: 992px) {
    width: 346px;
  }
`;

export const ContainerImage = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    width: 666px;
    height: 372px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${fundoregisterhub});
  }
`;
