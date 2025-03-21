import React from 'react';
import * as Yup from 'yup';
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidation } from '../../../../hooks/useFormValidation';

interface LoginFormData {
  username: string;
  password: string;
}

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum 3 characters.')
    .required('Username is required.'),
  password: Yup.string().required('Password is required.'),
});

const FormLogin: React.FC = () => {
  const { handleSubmit, register } = useForm<LoginFormData>();
  const methods = useFormValidation<typeof schema>(schema);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/home');
  };

  return (
    <FormProvider {...methods}>
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='text-white text-2xl font-semibold font-serif text-center mb-2'>
          Black Forge
        </h2>
        <Input
          type='text'
          placeholder='Username'
          {...register('username', { required: true })}
        />
        <Input
          type='password'
          placeholder='Password'
          {...register('password', { required: true })}
        />
        <Button type='submit' variant='primary'>
          Login
        </Button>
        <Link to='/signup'>Signup</Link>
      </form>
    </FormProvider>
  );
};

export default FormLogin;
