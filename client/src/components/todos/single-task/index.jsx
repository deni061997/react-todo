import React from 'react'
import { useDispatch } from 'react-redux'
import { TaskContainer, Text, Button, Container } from './styles'
import { deleteTodo } from '../../../redux/todos'

export default function SingleTask({ todos }) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <Container>
      {todos.map(todo => 
          <TaskContainer key={todo._id}>
            {todo.favorite ?
              <input
                type='checkbox'
                checked
              /> :
              <input
              type='checkbox'
              />
            }
            <Text>
              {todo.title}
            </Text>
            <Button onClick={() => handleDelete(todo._id)}>
              <i className='material-icons'>delete</i>
            </Button>
          </TaskContainer>
        )}
    </Container>
  )
}
