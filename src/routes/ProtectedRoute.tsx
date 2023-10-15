import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        sessionStorage.setItem("userLocationBeforeLogin", location.pathname);
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
