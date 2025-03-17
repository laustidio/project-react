import React, { useState } from 'react';
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import { Link, useNavigate } from 'react-router-dom';

const FormLogin: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.username.trim() && formData.password.trim()) {
      localStorage.setItem('user', JSON.stringify(formData)); //Simulate authentication
      navigate('/home');
    } else {
      alert('All the fields are riquired be completed!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Updates state dynamically
    });
  };

  return (
    <form
      className={`
        flex flex-col 
        items-center 
        justify-center 
        w-[400px] 
        h-[300px] 
        p-5 
        gap-4 
        border 
        border-white/20 
        bg-white/10 
        backdrop-blur-lg 
        shadow-xl 
        rounded-xl
        relative 
        z-10
        `}
      onSubmit={handleLogin}
    >
      <h2 className='text-white text-2xl font-semibold font-serif text-center mb-2'>
        Black Forge
      </h2>
      <Input
        type='text'
        name='username'
        placeholder='Username'
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
      <Button type='submit' variant='primary'>
        Login
      </Button>
      <Link to="/signup">Signup</Link>
    </form>
  );
};

export default FormLogin;
