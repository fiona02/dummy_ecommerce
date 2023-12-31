import { get } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@shared/UI';
import cl from 'classnames';

import { FormErrorMessage } from '../FormErrorMessage';
import { FormLabel } from '../FormLabel';

import type { InputProps } from '@shared/UI';
import type { ReactNode } from 'react';
import type {
  DeepMap,
  FieldError,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

import styles from './FormInput.module.scss';

export type FormInputProps<TFormValues extends FieldValues> = InputProps & {
  name: FieldPath<TFormValues>;
  label?: ReactNode;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
};

export const FormInput = <TFormValues extends FieldValues>(props: FormInputProps<TFormValues>) => {
  const { name, label, register, errors, rules, ...restProps } = props;

  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  const wrapperClasses = cl(styles.formInputWrapper, {
    [styles.formInputWrapperWithError]: hasError,
  });

  return (
    <div className={wrapperClasses}>
      <FormLabel htmlFor={name} aria-invalid={hasError}>
        {label}
      </FormLabel>
      <Input
        id={name}
        name={name}
        aria-invalid={hasError}
        className={styles.formInput}
        {...(register && register(name, rules))}
        {...restProps}
      />
      <ErrorMessage
        errors={errors || []}
        name={name as any}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  );
};
