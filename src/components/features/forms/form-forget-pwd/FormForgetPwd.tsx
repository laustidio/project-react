import React from 'react';
import * as Yup from 'yup';
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import CardForm from '../../../card-form/CardForm';
import { Heading } from '../../../ui/heading/Heading';
import FormContainer from '../../../form/FormContainer';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email('Email is not valid.'),
});

const FormForgetPwd: React.FC = () => {
  const methods = useFormValidation<typeof schema>(schema);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Yup.InferType<typeof schema>> = () => {
    navigate('/signup');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <FormProvider {...methods}>
      <CardForm>
        <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <Heading variant='h2'>Recover password</Heading>

          <p className='text-white'>
            Enter your email below and we’ll send you a link in a few seconds to
            reset your password.
          </p>

          <Input name='email' type='email' placeholder='username@example.com' />

          <div className='flex justify-between items-center'>
            <Button variant='secondary' type='button' onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='primary' type='submit'>
              Reset
            </Button>
          </div>
        </FormContainer>
      </CardForm>
    </FormProvider>
  );
};
export default FormForgetPwd;
