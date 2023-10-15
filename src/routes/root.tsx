import { Outlet } from "react-router-dom";
import './root.css'

export default function Root() {
    return (
        <div>
            <h1 className="main-heading">Home Page</h1>
            <div>
                {/* This is where we render the child routes */}
                <Outlet />
            </div>
        </div>
    );
}
