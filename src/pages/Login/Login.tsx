import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../../components/features/forms/form-login/FormLogin';
import ParticlesBackground from '../../components/features/particles-background/ParticlesBackground';

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
      <ParticlesBackground moveSpeed={0.7}/>
      <FormLogin />
    </div>
  );
};

export default Login;
