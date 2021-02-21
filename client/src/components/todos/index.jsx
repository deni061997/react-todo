import React, { useState, useEffect } from 'react'
import { Container, Main, Input, Form, InputContainer, ButtonDelete, Button } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import SingleTask from './single-task'
import { createTodo, getTodos } from '../../redux/todos' 
import { useHistory } from 'react-router-dom'

export default function Todos() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [text, setText] = useState('')
  const todo = {favorite: false, title: text, finished: false}
  const todos = useSelector(state => state.todos.items)

  const addTodo = () => {
    if (text) {
      dispatch(createTodo(todo))
    }
  }

  useEffect(() => {
      dispatch(getTodos())
  }, [])

  const clear = () => {
    setText('')
  }

  return (
    <Container>
      <Main>
        <Form>
          <InputContainer>
            <Input
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <ButtonDelete onClick={clear}>
              {text &&
              <i className='material-icons'>clear</i>}
            </ButtonDelete>
          </InputContainer>
          <Button onClick={addTodo}>
            Добавить задачу
          </Button>
        </Form>
        <SingleTask todos={todos}/>
      </Main>
    </Container>
  )
}
