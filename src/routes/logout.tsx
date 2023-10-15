import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        navigate("/");
    }

    return (
        <>
            <h1>Logout Page</h1>
            <button onClick={logoutHandler}>Logout</button>
        </>
    );
};
