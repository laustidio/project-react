import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
      <h1 className='text-3xl font-bold'>Bem-vindo à Home!</h1>
      <button
        onClick={handleLogout}
        className='mt-5 px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all'
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
