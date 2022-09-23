import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;

  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  width: 30%;
  height: 20%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blue_800};

  border-radius: 10px;

  z-index: 999;

  input {
    width: 100px;
    height: 100px;

    padding: 20px;

    border: 2px solid black;
    border-radius: 10px;

    font-weight: bold;
    font-size: medium;

    align-items: center;

    color: white;
    background-color: ${({ theme }) => theme.colors.blue_900};

    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
