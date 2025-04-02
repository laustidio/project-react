import React from 'react';
import * as Yup from 'yup';
import Input from '../../../ui/input/Input';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/button/Button';
import CardForm from '../../../card-form/CardForm';
import Checkbox from '../../../ui/checkbox/Checkbox';
import { Heading } from '../../../ui/heading/Heading';
import FormContainer from '../../../form/FormContainer';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { LockKeyhole, Mail, SquareUserRound } from 'lucide-react';
import { useFormValidation } from '../../../../hooks/useFormValidation';

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum 3 characters.')
    .required('Username is required.'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters.')
    .required('Password is required.'),
  confirmPwd: Yup.string()
    .oneOf([Yup.ref('password')], 'The passwords do not match.')
    .required('Password confirmation is mandatory.'),
  email: Yup.string()
    .email('Email is not valid.')
    .required('Email is required.'),
  isAcceptTherms: Yup.boolean().oneOf([true], 'You must accept the therms.'),
});

const FormSignup: React.FC = () => {
  const methods = useFormValidation<typeof schema>(schema);

  const navigate = useNavigate();
  const { reset } = methods;

  const onSubmit: SubmitHandler<Yup.InferType<typeof schema>> = () => {
    reset();
  };

  const handleCancel = () => {
    methods.reset();
    navigate('/login');
  };

  return (
    <FormProvider {...methods}>
      <CardForm>
        <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <Heading variant='h2'>New account</Heading>

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
          <Input
            type='password'
            placeholder='Confirm password'
            name='confirmPwd'
            isPassword
            icon={<LockKeyhole size={18} />}
          />
          <Input
            type='email'
            placeholder='username@example.com'
            name='email'
            icon={<Mail size={18} />}
          />

          <Checkbox
            label={
              <>
                I confirm that I have read, consent and agree to Black Forge’s{' '}
                <a href='' className='text-cyan-400 hover:underline'>
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href='' className='text-cyan-400 hover:underline'>
                  Privacy Policy
                </a>
                .
              </>
            }
            name='isAcceptTherms'
          />

          <div className='flex w-full justify-between items-center'>
            <Button onClick={handleCancel} variant='secondary'>
              Cancel
            </Button>
            <Button type='submit' variant='primary'>
              Signup
            </Button>
          </div>
        </FormContainer>
      </CardForm>
    </FormProvider>
  );
};
export default FormSignup;
