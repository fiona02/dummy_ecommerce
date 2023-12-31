import { useEffect } from 'react';

import { CloseIcon, Portal } from '@shared/UI';
import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { CSSProperties, ReactNode } from 'react';

import './Modal.scss';

export type ModalProps = {
  children: ReactNode;

  actions?: ReactNode;

  isOpen: boolean;

  onClose: () => void;

  className?: string;

  style?: CSSProperties;

  title?: ReactNode;

  size?: 'sm' | 'md' | 'lg';
};

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen = false,
    className,
    style,
    onClose,
    title,
    actions,
    size = 'md',
  } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('modal');

  const classes = cl(rootClass, className, appendClass(`--${size}`), {
    [appendClass('--open')]: isOpen,
  });

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId="ui-modal-portal">
      <div className={classes} style={style}>
        <div className={appendClass('-container')}>
          <div className={appendClass('-header')}>
            <span className={appendClass('-title')}>{title}</span>
            <span className={appendClass('-close-icon')} onClick={onClose}>
              <CloseIcon />
            </span>
          </div>
          <div className={appendClass('-content')}>{children}</div>
          <div className={appendClass('-actions')}>{actions}</div>
        </div>

        <div className={appendClass('-backdrop')} onClick={onClose}></div>
      </div>
    </Portal>
  );
};
