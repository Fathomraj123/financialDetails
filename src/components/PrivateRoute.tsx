import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    return isAuthenticated ? children : <Navigate to="/SignIn"/>;
};

export default PrivateRoute;
