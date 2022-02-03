import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const ProtectedRoute = (props) => {
    const { children, ...restProps } = props
    const navigate = useNavigate();
    const token = useSelector(state => state.user.response.token);

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [])

    return (

        < >{token && children}</>

    )
}

export default ProtectedRoute