import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  console.log(inputValue, passwordValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
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
    >
      <h2 className='text-white text-2xl font-semibold font-serif text-center mb-2'>
        Black Horse
      </h2>
      <Input
        type='text'
        placeholder='Username'
        value={inputValue}
        onChange={handleInputChange}
      />
      <Input
        type='password'
        placeholder='Password'
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      <Button variant='primary'>Login</Button>
    </form>
  );
};

export default Form;
