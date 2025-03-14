import { useNavigate } from 'react-router-dom';
import { homeStyles } from './HomeStyles';
import Button from '../../components/ui/Button/Button';
import ParticlesBackground from '../../components/ui/layouts/background/ParticlesBackground';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <ParticlesBackground moveSpeed={0.1} />
      <div className={homeStyles.home}>
        <div className={homeStyles.conteiner}>
          <div className={homeStyles.title}>
            <h3>Welcome Home!</h3>
          </div>
          <div className={homeStyles.containerBody}>
            <p className='text-lg'>Você está logado com sucesso1! 🎉</p>
            <div className='flex justify-end'>
              <Button onClick={handleLogout} variant='secondary'>
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className={homeStyles.conteiner}>
          <div className={homeStyles.title}>
            <h3>Welcome Home!</h3>
          </div>
          <div className={homeStyles.containerBody}>
            <p className='text-lg'>Você está logado com sucesso2! 🎉</p>
            <div className='flex justify-end'>
              <Button onClick={handleLogout} variant='secondary'>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
