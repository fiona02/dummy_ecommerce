import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { ButtonHTMLAttributes } from 'react';

import './CountHandler.scss';

export type CountHandlerProps = {
  count: number;

  onClickPlus?: () => void;

  onClickMinus?: () => void;

  propsPlusButton?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

  propsMinusButton?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

  direction?: 'horizontal' | 'vertical';
};

export const CountHandler = (props: CountHandlerProps) => {
  const {
    count,
    direction = 'vertical',
    propsPlusButton,
    propsMinusButton,
    onClickMinus,
    onClickPlus,
  } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('count-handler');

  const classes = cl(rootClass, appendClass(`--${direction}`));

  return (
    <div className={classes}>
      <button
        className={appendClass(['-plus', '-button'])}
        onClick={onClickPlus}
        {...propsPlusButton}
      >
        +
      </button>
      <span className={appendClass('-count')}>{count}</span>
      <button
        className={appendClass(['-minus', '-button'])}
        onClick={onClickMinus}
        {...propsMinusButton}
      >
        -
      </button>
    </div>
  );
};
