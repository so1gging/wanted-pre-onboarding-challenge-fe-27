import PostUsersCreateIn from '@/services/models/users/PostUsersCreateIn'
import { request } from '../client'
import PostUsersLoginIn from '@/services/models/users/PostUsersLoginIn'

export const postUsersCreate = async (data: PostUsersCreateIn) => {
  const response = await request({ method: 'POST', url: 'users/create', data })

  return response?.data
}

export const postUsersLogin = async (data: PostUsersLoginIn) => {
  const response = await request({ method: 'POST', url: 'users/login', data })

  return response?.data
}
