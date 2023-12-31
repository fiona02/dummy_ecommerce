import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '@components';
import { signinSchema } from '@core/repositories/auth';
import { routes } from '@core/routes';
import { useAuthStore } from '@core/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppLocation, useAppNavigate } from '@hooks';
import { Button, EyeIcon, EyeOffIcon } from '@shared/UI';

import type { SigninDto } from '@core/repositories/auth';
import type { AuthState } from '@core/stores';
import type { SubmitHandler } from 'react-hook-form';

import styles from './SigninForm.module.scss';

const authSelector = (state: AuthState) => [state.login];

export const SigninForm = () => {
  const [login] = useAuthStore(authSelector);

  const [visiblePassword, setVisiblePassword] = useState(false);

  const navigate = useAppNavigate();

  const location = useAppLocation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninDto>({
    resolver: zodResolver(signinSchema),
    mode: 'onBlur',
  });

  const handleVisiblePassword = () => {
    setVisiblePassword((prevState) => !prevState);
  };

  const eyeIcon = (
    <span onClick={handleVisiblePassword}>{visiblePassword ? <EyeIcon /> : <EyeOffIcon />}</span>
  );

  const onSubmit: SubmitHandler<SigninDto> = (data) => {
    login(data).then(() => {
      navigate(location.state.from || routes.home.root, { replace: true });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Username" name="username" register={register} errors={errors} />
      <FormInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
        suffixIcon={eyeIcon}
        type={visiblePassword ? 'text' : 'password'}
      />
      <Button type="submit" className={styles.button}>
        Sign in
      </Button>
    </form>
  );
};
