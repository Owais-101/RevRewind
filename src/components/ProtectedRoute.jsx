import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    const data = localStorage.getItem('bikerRewind')
    if (!data) return <Navigate to='/' replace />
    return children
}

export default ProtectedRoute