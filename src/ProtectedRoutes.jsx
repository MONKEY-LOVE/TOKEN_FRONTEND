import { useAuth } from "./contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"


function ProtectedRoutes() {
  const {loading, isAuthenticated} = useAuth()
  if(loading) return <h1>Cargando...</h1>
  if(!loading && !isAuthenticated) return <Navigate to='/login' replace />

  

  return (
    <Outlet />
  )
}

export default ProtectedRoutes