import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  return isLoggedIn ? <Outlet /> : <Navigate to='/sing-in' />
}

export default PrivateRoute