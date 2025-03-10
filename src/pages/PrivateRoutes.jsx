import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/login" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default PrivateRoutes;
