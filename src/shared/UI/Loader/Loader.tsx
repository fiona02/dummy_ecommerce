import { memo } from 'react';

import cl from 'classnames';

import { useGetClassWithPrefix } from '../_hooks';

import type { ReactNode } from 'react';

import './Loader.scss';

export type LoaderProps = {
  size?: 'sm' | 'md' | 'lg';

  className?: string;

  children?: ReactNode;

  spinning?: boolean;
};

export const Loader = memo((props: LoaderProps) => {
  const { size = 'md', className, children, spinning = true } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('loader');

  const classes = cl(rootClass, className, appendClass(`--${size}`));

  return (
    <div className={appendClass('-wrapper')}>
      {spinning && (
        <>
          <div className={appendClass('-box')}>
            <span className={classes} data-child="1" />
            <span className={classes} data-child="2" />
            <span className={classes} data-child="3" />
          </div>
        </>
      )}
      {children}
    </div>
  );
});
