import PostTodoIn from '@/services/models/todos/PostTodoIn'
import { request } from '../client'

const postTodo = async (data: PostTodoIn) => {
  const response = await request({ method: 'POST', url: 'todos', data })
  return response?.data
}

export default postTodo
