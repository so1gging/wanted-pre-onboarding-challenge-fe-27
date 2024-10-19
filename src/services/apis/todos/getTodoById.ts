import GetTodoOut from '@/services/models/todos/GetTodosOut'
import { request } from '../client'

const getTodoById = async (id: string) => {
  const response = await request<GetTodoOut>({ method: 'GET', url: `todos/${id}` })

  return response.data
}

export default getTodoById
