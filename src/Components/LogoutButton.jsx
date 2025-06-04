import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";

export default function LogoutButton(){
    const { logout, token } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        setTimeout (() => { navigate("/") }, 0); // Redirect to home page after logout
    }

    return token ? (
        <button onClick={handleLogout}>Log out</button>
    ) : <Link to="/login">Log in</Link>; 
}