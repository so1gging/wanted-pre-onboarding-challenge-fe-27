import tokenStorage from '@/stores/tokenStorage'
import { PropsWithChildren } from 'react'

const AuthGate = ({ children }: PropsWithChildren) => {
  const pathname = location.pathname
  const token = tokenStorage.get()

  if (!token && !pathname.includes('/auth')) {
    window.location.href = '/auth'
    return null
  }

  if (token && pathname.includes('/auth')) {
    window.location.href = '/'
    return null
  }

  return <>{children}</>
}

export default AuthGate
