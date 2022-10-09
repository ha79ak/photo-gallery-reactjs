import { Navigate, Outlet } from "react-router-dom"
import useLoggedIn from "../hooks/useLoggedIn"

export default function Layout() {
    
    const isLoggedIn = useLoggedIn()

    if (isLoggedIn === null) return <h1>Loading...</h1>
    else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />

    return <Outlet />
}