import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import { path } from '../constants/path'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ProductDetails from './../pages/ProductDetail'
import NotFound from './../pages/NotFound'
import Home from './../pages/Home'
import Cart from './../pages/Cart'
import MainLayout from './../Layouts/MainLayout'

const isAuthenticated = true
/* A function that is used to check if the user is authenticated or not. If the user is authenticated,
it will redirect to the home page. If not, it will redirect to the login page. */
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/auth/login' />
}

/* A function that is used to check if the user is authenticated or not. If the user is authenticated,
it will redirect to the home page. If not, it will redirect to the login page. */
function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  /* A function that is used to check if the user is authenticated or not. If the user is
  authenticated,
  it will redirect to the home page. If not, it will redirect to the login page. */
  const routeElements = useRoutes([
    // reject route
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          )
        },
        {
          path: path.register,
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          )
        }
      ]
    },
    // protected routes
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.cart,
          element: (
            <>
              <MainLayout>
                <Cart />
              </MainLayout>
            </>
          )
        }
      ]
    },
    // route normal
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },

    {
      path: '*',
      element: <NotFound />
    },
    {
      path: path.productDetail,
      element: (
        <MainLayout>
          <ProductDetails />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
