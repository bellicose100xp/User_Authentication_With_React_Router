import React from "react";
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import "./index.css";

/* Components */
import Root from "./routes/root";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Login from "./routes/login";
import Profile from "./routes/profile";
import Setting from "./routes/setting";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Logout } from './routes/logout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            errorElement={<ErrorPage />}
            element={
                // Since all child elements render under root, they all get AuthContext
                <AuthContextProvider>
                    <Root />
                </AuthContextProvider>
            }
        >
            <Route path="contacts/:id" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />

            <Route
                path="profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="setting"
                element={
                    <ProtectedRoute>
                        <Setting />
                    </ProtectedRoute>
                }
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
