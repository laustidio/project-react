import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../../components/features/FormLogin/FormLogin';
import ParticlesBackground from '../../components/features/ParticlesBackground/ParticlesBackground';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/home', { replace: true });
    } //Blocked users to go back to /login
  }, [navigate]);

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center relative`}
    >
      <ParticlesBackground />
      <FormLogin />
    </div>
  );
};

export default Login;
