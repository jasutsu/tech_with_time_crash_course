import React from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { NotFound } from "./pages/NotFound"
import { Register } from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"

const Logout = () => {
    let navigate = useNavigate()
    localStorage.clear()
    return navigate("/login")
}

const RegisterAndLogout = () => {
    localStorage.clear()
    return <Register />
}

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
