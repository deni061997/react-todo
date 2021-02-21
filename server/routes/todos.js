import Router from 'express'
import { getTodos, createTodo, deleteTodo } from '../controllers/todos.js'
import authMiddleware from '../middleware/auth.js'
const router = new Router()

router.get('/get', authMiddleware, getTodos)
router.post('/create', authMiddleware, createTodo)
router.delete('/delete', deleteTodo)

export default router
