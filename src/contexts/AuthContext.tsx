import { createContext } from "react";

const AuthContext = createContext<IAuthUser>({
    user: null,
    login: () => new Promise(() => {}),
    logout: () => {},
});

export default AuthContext;
