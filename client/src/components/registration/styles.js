import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  width: 250px;
  height: 40px;
  font-size: 15px;
`;
export const Button = styled.button`
  border: none;
  padding: 15px 40px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  outline: none;
  background: linear-gradient(#28d1c9, #348ee29b);
  border-radius: 6px;
  &:active {
    background-color: #3e8e41;
    box-shadow: #666;
    transform: translateY(4px);
  }
`;

export const ClearButton = styled.button`
border: none;
padding: 15px 40px;
cursor: pointer;
font-weight: bold;
font-size: 15px;
outline: none;
background: linear-gradient(#d12852, #d16ca29b);
border-radius: 6px;
&:active {
  background-color: #3e8e41;
  box-shadow: #666;
  transform: translateY(4px);
`;
