import { useEffect } from "react"
import { useNavigate } from "react-router"

export const Logout = () => {
    let navigate = useNavigate()
    localStorage.clear()

    useEffect(() => {
        navigate("/login/")
    }, [])

    return <></>
}