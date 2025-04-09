import { Children } from "react";
import Login from "../pages/Auth/Login"
import LoginSeller from "../pages/Auth/LoginSeller";
import Register from "../pages/Auth/Register"
import RegisterSeller from "../pages/Auth/RegisterSeller"
import LayoutPage from "../pages/Layout/LayoutPage";
import Home from "../pages/Home";

const publicRoutes = [
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/register-seller",
        element : <RegisterSeller />
    },
    {
        path : "/login-seller",
        element : <LoginSeller />
    },
    {
        path : "/",
        element : <LayoutPage />,
        children : [
            {
                index : true,
                element : <Home />
            }
        ]
    }
]
export default publicRoutes;