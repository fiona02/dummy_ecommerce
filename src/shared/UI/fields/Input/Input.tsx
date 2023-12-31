import { forwardRef } from 'react';

import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { InputHTMLAttributes,ReactElement  } from 'react';

import './Input.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactElement;

  suffixIcon?: ReactElement;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { prefixIcon, suffixIcon, className, ...restProps } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('input');

  const classes = cl(rootClass, className, {
    [appendClass('--with-prefix')]: prefixIcon,
  });

  const simpleElement = <input className={classes} ref={ref} {...restProps} />;

  const prefixElement = prefixIcon ? (
    <span className={appendClass('-prefix')}>{prefixIcon}</span>
  ) : null;

  const suffixElement = suffixIcon ? (
    <span className={appendClass('-suffix')}>{suffixIcon}</span>
  ) : null;

  const additionalClasses = cl(appendClass('-wrapper'), {
    [appendClass('--with-suffix')]: suffixIcon,
    [appendClass('--with-prefix')]: prefixIcon,
  });

  const withAdditionalElement = (
    <div className={additionalClasses}>
      {prefixElement}
      {simpleElement}
      {suffixElement}
    </div>
  );

  const element = prefixIcon || suffixIcon ? withAdditionalElement : simpleElement;

  return <>{element}</>;
});
