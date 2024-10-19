import PostUsersCreateIn from '@/services/models/users/PostUsersCreateIn'
import { request } from '../client'

const postUsersCreate = async (data: PostUsersCreateIn) => {
  const response = await request({ method: 'POST', url: 'users/create', data })

  return response?.data
}

export default postUsersCreate
