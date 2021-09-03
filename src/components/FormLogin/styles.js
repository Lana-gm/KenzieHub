import styled from "styled-components";
import fundologinhub from "../../assets/img/fundologinhub.svg";

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
  height: 274px;
  border-radius: 8px;

  h3 {
    text-align: center;
  }

  @media (min-width: 992px) {
    width: 334px;
    height: 274px;
  }
`;

export const ContainerImage = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    width: 496px;
    height: 442px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${fundologinhub});
  }
`;
