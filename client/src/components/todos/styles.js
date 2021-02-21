import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  width: 100%;
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 10px;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  margin-top: 7%;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 8px;
`

export const Input = styled.input`
  width: 60%;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 19px;
  align-items: center;
  padding: 10px;
`

export const Task = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: scroll;
`

export const InputContainer = styled.div`
  width: 30%;
  display: flex;
  height: 60px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: white
`

export const ButtonDelete = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  outline: none;
  margin-right: 10px
`

export const Button = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(#64e6e6, #9198e5);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:active {
    background-color: #3e8e41;
    box-shadow: #666;
    transform: translateY(4px);
  }
`
