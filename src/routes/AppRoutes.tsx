import Login from '../pages/login/Login';
import HomePage from '../pages/home/Home';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/signup/SignUp';
import MainLayout from '../components/layouts/main-layout/MainLayout';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import ParticlesBackground from '../components/features/particles-background/ParticlesBackground';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';
import ForgetPwd from '../pages/forget-pwd/ForgetPwd';

const AppRoutes = () => {
  return (
    <Router>
      <ParticlesBackground moveSpeed={0.4} />
      <Routes>
        {/* Login page out of principal layout */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget-password' element={<ForgetPwd />} />

        <Route element={<PrivateRoute />}>
          {/* Protect routes before login */}
          <Route element={<MainLayout />}>
            {/* Render pages using Outlet */}
            <Route path='/home' element={<HomePage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
