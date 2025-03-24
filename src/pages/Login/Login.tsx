import clsx from 'clsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../../components/features/forms/form-login/FormLogin';

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
      className={clsx(
        'w-screen h-screen',
        'flex items-center justify-center relative'
      )}
    >
      <FormLogin />
    </div>
  );
};

export default Login;
