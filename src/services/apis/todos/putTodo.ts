import PutTodoIn from '@/services/models/todos/PutTodoIn'
import { request } from '../client'

const putTodo = async (id: string, data: PutTodoIn) => {
  const response = await request({ method: 'PUT', url: `todos/${id}`, data })

  return response?.data
}

export default putTodo
