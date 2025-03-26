import React from 'react';
import FormForgetPwd from '../../components/features/forms/form-forget-pwd/FormForgetPwd';
import clsx from 'clsx';

const ForgetPwd: React.FC = () => {
  return (
    <div
      className={clsx(
        'w-screen h-screen',
        'flex items-center justify-center relative'
      )}
    >
      <FormForgetPwd />
    </div>
  );
};

export default ForgetPwd;
