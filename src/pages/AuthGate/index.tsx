import tokenStorage from '@/stores/tokenStorage'
import { PropsWithChildren } from 'react'

const AuthGate = ({ children }: PropsWithChildren) => {
  const pathname = location.pathname
  const token = tokenStorage.get()

  if (!token && !pathname.includes('/login')) {
    window.location.href = '/login'
    return null
  }

  if (token && pathname.includes('/login')) {
    window.location.href = '/'
    return null
  }

  return <>{children}</>
}

export default AuthGate
