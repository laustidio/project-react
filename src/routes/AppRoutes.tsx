import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import HomePage from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Login page out of principal layout */}
                <Route path="/login" element={<Login />} />
                <Route path='/' element={<Navigate to={'/login'} />} />

                <Route element={<PrivateRoute />}> {/* Protect routes before login */}
                    <Route element={<MainLayout />}> {/* Render pages with Outlet */}
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}



export default AppRoutes;