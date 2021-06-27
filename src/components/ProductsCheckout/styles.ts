import styled from "styled-components";

export const HeaderItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const CheckoutContainer = styled("div")`
  font-size: 0.8rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  border: 1px solid #0077b6;
`;

export const ItemsContainer = styled("div")`
  height: 55%;
  overflow-y: scroll;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const InfoProduct = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
