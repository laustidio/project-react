import React from 'react';
import * as Yup from 'yup';
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import clsx from 'clsx';

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.'),
});

const FormLogin: React.FC = () => {
  const methods = useFormValidation<typeof schema>(schema);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Yup.InferType<typeof schema>> = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/home');
  };

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(
          'flex flex-col items-center justify-center',
          'w-[400px] h-[300px] p-5 z-10 gap-4',
          'border border-white/20 bg-white/10 backdrop-blur-lg',
          'shadow-xl rounded-xl relative'
        )}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h2
          className={clsx(
            'text-white text-2xl font-semibold font-serif',
            'text-center mb-2'
          )}
        >
          Black Forge
        </h2>
        <Input type='text' placeholder='Username' name='username' />
        <Input type='password' placeholder='Password' name='password' />

        <Button type='submit' variant='primary' className='w-full'>
          Login
        </Button>
        <div className={clsx('w-full flex justify-between items-center')}>
          <Link to='/signup' className='text-blue-500'>
            Forgot password?
          </Link>
          <Link to='/signup' className='text-blue-500'>
            Signup
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormLogin;
