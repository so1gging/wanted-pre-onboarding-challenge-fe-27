import PostUsersLoginIn from '@/services/models/users/PostUsersLoginIn'
import { request } from '../client'

const postUsersLogin = async (data: PostUsersLoginIn) => {
  const response = await request({ method: 'POST', url: 'users/login', data })

  return response?.data
}

export default postUsersLogin
