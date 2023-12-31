import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { HTMLAttributes } from 'react';

import './Divider.scss';

export type DividerProps = Omit<HTMLAttributes<HTMLDivElement>, 'type'> & {
  type?: 'vertical' | 'horizontal';
};

export const Divider = (props: DividerProps) => {
  const { className, type = 'horizontal', ...restProps } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('divider');

  const classes = cl(rootClass, className, {
    [appendClass('--vertical')]: type === 'vertical',
    [appendClass('--horizontal')]: type === 'horizontal',
  });

  return <div className={classes} {...restProps}></div>;
};
