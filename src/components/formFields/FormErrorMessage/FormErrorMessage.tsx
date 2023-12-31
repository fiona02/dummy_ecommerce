import cl from 'classnames';

import type { ReactNode } from 'react';

import styles from './FormErrorMessage.module.scss';

export type FormErrorMessageProps = {
  className?: string;
  children: ReactNode;
};

export const FormErrorMessage = (props: FormErrorMessageProps) => {
  const { children, className } = props;

  const classes = cl(styles.formErrorMessage, className);

  return <p className={classes}>{children}</p>;
};
