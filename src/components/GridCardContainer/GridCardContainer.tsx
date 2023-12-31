import cl from 'classnames';

import type { ReactNode } from 'react';

import styles from './GridCardContainer.module.scss';

export type GridCardContainerProps = {
  children: ReactNode;
  className?: string;
};

export const GridCardContainer = (props: GridCardContainerProps) => {
  const { children, className } = props;

  const classes = cl(styles.gridContainer, className);

  return <div className={classes}>{children}</div>;
};
