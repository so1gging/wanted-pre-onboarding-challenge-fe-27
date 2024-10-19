import GetTodoOut from '@/services/models/todos/GetTodosOut'
import { request } from '../client'
import PostTodoIn from '@/services/models/todos/PostTodoIn'
import PutTodoIn from '@/services/models/todos/PutTodoIn'

export const getTodoById = async (id: string) => {
  const response = await request<GetTodoOut>({ method: 'GET', url: `todos/${id}` })

  return response.data
}

export const getTodos = async () => {
  const response = await request<GetTodoOut[]>({ method: 'GET', url: 'todos' })
  return response?.data
}

export const postTodo = async (data: PostTodoIn) => {
  const response = await request({ method: 'POST', url: 'todos', data })
  return response?.data
}

export const putTodo = async (id: string, data: PutTodoIn) => {
  const response = await request({ method: 'PUT', url: `todos/${id}`, data })

  return response?.data
}

export const deleteTodo = async (id: string) => {
  const response = await request({ method: 'DELETE', url: `todos/${id}` })

  return response?.data
}
