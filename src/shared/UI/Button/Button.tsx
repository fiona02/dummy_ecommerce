import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import './Button.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'full' | 'sm' | 'md' | 'lg';

  shape?: 'circle';

  icon?: ReactNode;

  btnType?: 'primary' | 'secondary';
};

export const Button = (props: ButtonProps) => {
  const {
    className,
    size = 'full',
    shape,
    icon,
    children,
    btnType = 'primary',
    disabled,
    ...restProps
  } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('button');

  const classes = cl(rootClass, className, appendClass(`--${size}`), appendClass(`--${btnType}`), {
    [appendClass(`--${shape}`)]: shape,
    [appendClass(`--with-icon`)]: icon,
    [appendClass(`--disabled`)]: disabled,
  });

  return (
    <button className={classes} {...restProps}>
      <span className={appendClass('-wrapper')}>
        <span className={appendClass('-icon')}>{icon}</span>
        {children}
      </span>
    </button>
  );
};
