import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import MainLayout from "../components/layouts/main-layout/MainLayout";
import HomePage from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import ParticlesBackground from "../components/features/particles-background/ParticlesBackground";

const AppRoutes = () => {
    return (
        <Router>
            <ParticlesBackground moveSpeed={0.1} />
            
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