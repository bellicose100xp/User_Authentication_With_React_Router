import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Name = () => {
    const { login } = useContext(AuthContext);

    const loginHandler = () => {
        login("jon");
    };

    return (
        <div>
            <h1>This is Login Page</h1>
            <button onClick={loginHandler}>Sign In</button>
        </div>
    );
};

export default Name;
