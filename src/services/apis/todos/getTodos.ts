import GetTodoOut from '@/services/models/todos/GetTodosOut'
import { request } from '../client'

const getTodos = async () => {
  const response = await request<GetTodoOut[]>({ method: 'GET', url: 'todos' })
  return response?.data
}

export default getTodos
