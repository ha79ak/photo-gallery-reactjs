import { Navigate, Outlet } from "react-router-dom"
import useLoggedIn from "../hooks/useLoggedIn"

export default function AuthLayout() {
    
    const isLoggedIn = useLoggedIn()

    if (isLoggedIn === null) return <h1>Loading...</h1>
    else if (isLoggedIn === true) return <Navigate replace to="/" />

    return <Outlet />
}