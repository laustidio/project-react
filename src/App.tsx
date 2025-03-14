import './App.css';
import HomePage from './pages/Home/Home';
import Login from './pages/Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
