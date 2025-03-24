import React from 'react';
import FormSignup from '../../components/features/forms/form-signup/FormSignup';

const SignUp: React.FC = () => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center relative`}
    >
      <FormSignup />
    </div>
  );
};

export default SignUp;
