import { useCallback } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const AuthContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useLocalStorage("user");
    const navigate = useNavigate();

    // Call this function to authenticate the user
    const login = useCallback(
        async (user: string) => {
            setUser(user);

            // If user came from from page that required authentication
            // Then try to send him back to the same page
            const userLocationBeforeLogin = sessionStorage.getItem("userLocationBeforeLogin");

            if (userLocationBeforeLogin) {
                navigate(userLocationBeforeLogin);
                sessionStorage.removeItem("userLocationBeforeLogin");
            } else {
                navigate("/");
            }
        },
        [navigate, setUser]
    );

    // Call this function to un-authenticate the user
    const logout = useCallback(() => {
        setUser(null);
        navigate("/", { replace: true });
    }, [navigate, setUser]);

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
