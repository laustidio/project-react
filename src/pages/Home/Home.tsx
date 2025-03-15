import { homeStyles } from './HomeStyles';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className={homeStyles.home}>
      <div className={homeStyles.conteiner}>
        <div className={homeStyles.title}>
          <h3>Welcome Home!</h3>
        </div>
        <div className={homeStyles.containerBody}>
          <p className='text-lg'>Você está logado com sucesso1! 🎉</p>
          <div className='fixed bottom-8 right-8'>
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
          <div className='fixed bottom-8 right-8'>
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
          <div className='fixed bottom-8 right-8'>
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
          <div className='fixed bottom-8 right-8'>
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
          <div className='fixed bottom-8 right-8'>
            <Button onClick={handleLogout} variant='secondary'>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
