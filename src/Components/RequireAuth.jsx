
import { Navigate, useLocation } from "react-router";    
import { useAuth } from "../contexts/AuthContext";

export default function RequireAuth({ children }) {
    
    const { token } = useAuth();
    const location = useLocation();

    console.log(location)

    if (!token) {
        // User is not authenticated, redirect to login page
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}   