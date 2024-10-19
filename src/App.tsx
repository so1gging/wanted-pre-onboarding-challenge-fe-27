import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PATH } from '@/commons/consts/routes'
import AuthGate from '@/pages/AuthGate'

function App() {
  const router = createBrowserRouter([
    {
      path: PATH.HOME,
      element: (
        <AuthGate>
          <Outlet />
        </AuthGate>
      ),
      children: [
        { index: true, element: <></> },
        { path: PATH.LOGIN, element: <></> },
        { path: PATH.SIGN_UP, element: <></> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
