import tokenStorage from '@/stores/tokenStorage'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = tokenStorage.get()

    /**
     * TODO: 토큰이 없는 경우 추후 추가
     */
    if (!token) throw new Error()

    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

export const request = async <T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const onSuccess = (response: AxiosResponse<T>) => response

  try {
    const response = await client(options)

    return onSuccess(response)
  } catch (error) {
    return Promise.reject(error)
  }
}
