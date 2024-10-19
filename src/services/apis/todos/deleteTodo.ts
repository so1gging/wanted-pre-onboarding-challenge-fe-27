import { request } from '../client'

const deleteTodo = async (id: string) => {
  const response = await request({ method: 'DELETE', url: `todos/${id}` })

  return response?.data
}
