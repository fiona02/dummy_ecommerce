import cl from 'classnames';

import type { LabelHTMLAttributes } from 'react';

import styles from './FormLabel.module.scss';

export type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {};

export const FormLabel = (props: FormLabelProps) => {
  const { className, ...restProps } = props;

  const classes = cl(styles.formLabel, className);

  return <label className={classes} {...restProps} />;
};
