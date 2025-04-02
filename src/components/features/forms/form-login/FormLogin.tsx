import clsx from 'clsx';
import React from 'react';
import * as Yup from 'yup';
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import CardForm from '../../../card-form/CardForm';
import { Link, useNavigate } from 'react-router-dom';
import { Heading } from '../../../ui/heading/Heading';
import FormContainer from '../../../form/FormContainer';
import { LockKeyhole, SquareUserRound } from 'lucide-react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { useFormValidation } from '../../../../hooks/useFormValidation';

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
      <CardForm>
        <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <Heading variant='h2'>Black Forge</Heading>

          <Input
            type='text'
            placeholder='Username'
            name='username'
            icon={<SquareUserRound size={18} />}
          />
          <Input
            type='password'
            placeholder='Password'
            name='password'
            isPassword
            icon={<LockKeyhole size={18} />}
          />

          <Button
            type='submit'
            variant='primary'
            className='w-full -mb-1'
            hoverStyle='hover:scale-104'
          >
            Login
          </Button>
          <div className={clsx('w-full flex justify-between items-center')}>
            <Link
              to='/forget-password'
              className={clsx('text-sm text-[#00E0FF] hover:text-[#00C2FF]')}
            >
              Forgot password?
            </Link>
            <Link
              to='/signup'
              className={clsx('text-sm text-[#00E0FF] hover:text-[#00C2FF]')}
            >
              Signup
            </Link>
          </div>
        </FormContainer>
      </CardForm>
    </FormProvider>
  );
};
export default FormLogin;
