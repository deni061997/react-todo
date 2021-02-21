import styled from 'styled-components'

export const HeaderContainer = styled.div`
height: 10%;
display: flex;
align-items: center;
background-color: rgb(39, 100, 180);
box-shadow: 0 0 10px rgba(0,0,0,0.5);
border-radius: 5px;
width: 100%;
`

export const ButtonContainer = styled.div`
display: flex;
width: 0;
height: 100%;
justify-content: flex-end;
align-items: center;
color: white;
padding-right: 140px
`

export const Button = styled.button`
text-decoration: none;
outline: none;
background: linear-gradient(to bottom, #00acee, #0072e0);
cursor: pointer;
font-size: 15px;
font-weight: bold;
color: white;
padding: 20px 45px;
border-radius: 10px;
border: none;
&:hover {
  background: #2EE59D;
  box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
  color: white;
  transform: translateY(-7px);
  transition: 2s;
}
`

export const NameContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
gap: 10px;
margin-left: 120px;
`

export const AuthButContainer = styled.div`
  display: flex;
  gap: 10px
`

export const ExitButton = styled.button`
  text-decoration: none;
  outline: none;
  background: linear-gradient(to bottom, #f12e0b, #fa1a2659);
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: white;
  padding: 20px 45px;
  border-radius: 10px;
  border: none;
  &:hover {
    background: #fa1a2659;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
    color: white;
    transform: translateY(-7px);
    transition: 2s;
  }
`
