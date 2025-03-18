import React from 'react';
import * as Yup from 'yup';
import Input from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import Checkbox from '../../../ui/checkbox/Checkbox';
import { FormSignupStyles } from './FormSignupStyles';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
  username: Yup.string().min(3, "Minimum 3 characters.").required('Username is required.'),
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

  const navigate = useNavigate()
  const { reset } = methods;

  const onSubmit: SubmitHandler<Yup.InferType<typeof schema>> = (data) => {
    console.log('Data', data);
    reset();
  };

  const handleCancel = () => {
    navigate("/login")
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={FormSignupStyles.form}>

        <h2 className={FormSignupStyles.h2}>Black Forge</h2>

        <Input type='text' placeholder='Username' name='username' />
        <Input type='password' placeholder='Password' name='password' />
        <Input type='password' placeholder='Confirm password' name='confirmPwd' />
        <Input type='email' placeholder='Email' name='email' />

        <Checkbox
          label={
            <>
              I confirm that I have read, consent and agree to Black Forge's{" "}
              <a href="" className="text-cyan-400 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="" className="text-cyan-400 hover:underline">
                Privacy Policy
              </a>.
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
      </form>
    </FormProvider >
  );
};
export default FormSignup;
