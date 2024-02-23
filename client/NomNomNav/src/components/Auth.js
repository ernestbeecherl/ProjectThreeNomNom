import React from 'react';
import { useForm } from 'react-hook-form';

const Auth = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle login or registration logic
  };

  return (
    <div>
      <h1>Login/Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form fields for login or registration */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Auth;