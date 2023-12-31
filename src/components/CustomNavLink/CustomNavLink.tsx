import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppLocation } from '@hooks';

import type { AppLocationState } from '@shared/types';
import type { NavLinkProps } from 'react-router-dom';

export type CustomNavLinkProps = Omit<NavLinkProps, 'state'> & {
  state?: AppLocationState;
};

export const CustomNavLink = memo((props: CustomNavLinkProps) => {
  const { state, to, ...restProps } = props;

  const { pathname } = useAppLocation();

  const linkState: AppLocationState = {
    ...state,
    from: state?.from ?? pathname,
  };

  return <NavLink to={to} state={linkState} {...restProps} />;
});
