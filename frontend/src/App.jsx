import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router"
import ProtectedRoute from "./components/ProtectedRoute"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { NotFound } from "./pages/NotFound"
import { Register } from "./pages/Register"
import { Logout } from "./pages/Logout"

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
                <Route path="/login/" element={<Login />} />
                <Route path="/logout/" element={<Logout />} />
                <Route path="/register/" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
