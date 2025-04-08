import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import publicRoutes from "./publicRoutes";

const AppRoutes = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;

    if(!user || !role) {
        return useRoutes([
            ...(publicRoutes || []),
            {path: "*", element: <Navigate to="/" />}
        ])
    }

    const routes = [
        ...(publicRoutes || []),
        {path: "*" , element : <Navigate to="/" />}
    ]

    return useRoutes(routes);
}

export default AppRoutes;