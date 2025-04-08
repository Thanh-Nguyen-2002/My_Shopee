import Login from "../pages/Auth/Login"
import LoginSeller from "../pages/Auth/LoginSeller";
import Register from "../pages/Auth/Register"
import RegisterSeller from "../pages/Auth/RegisterSeller"
import Home from "../pages/Layout/Home";

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
        element : <Home />
    }
]
export default publicRoutes;