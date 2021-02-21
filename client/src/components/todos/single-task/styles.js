import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  width: 42%;
  left: 29%;
  position: relative;
  margin-bottom: 15px;
`

export const TaskContainer = styled.div`
  padding: 20px;
  width: 94%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: white;
  align-items: center;
`

export const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  color: grey;
`

export const Text = styled.div`
  font-size: 19px
` 
