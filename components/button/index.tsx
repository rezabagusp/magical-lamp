import React, { ReactNode } from 'react';
import cn from 'classnames';
import { LoadingSpinner } from '../loading';
import styles from './index.module.css';

interface Props {
  variant?: 'primary' | 'primaryOutline',
  size?: 'md' | 'sm',
  className?: string,
  onClick?: (e: any) => void,
  disabled?: boolean,
  isLoading?: boolean,
  children: ReactNode,
  [x:string]: any,
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled,
  isLoading,
  children,
  ...rest
}: Props) => {
  const baseClasses: { [key: string]: string } = {
    btnPrimary: styles['button--primary'],
    btnOutline: styles['button--primaryOutline'],
    btnSmall: styles['button--sm'],
    btnDisabled: styles['button--disabled'],
  };

  const propsClass: { [key: string]: boolean | undefined } = {
    [baseClasses.btnPrimary]: variant === 'primary',
    [baseClasses.btnOutline]: variant === 'primaryOutline',
    [baseClasses.btnSmall]: size === 'sm',
    [baseClasses.btnDisabled]: disabled,
  };

  const buttonClass = cn(
    styles.button,
    propsClass,
    className,
  );

  const handleClick = (e: any) => {
    if (!onClick || disabled) return;
    onClick(e);
  };

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {
        isLoading && (
          <>
            <LoadingSpinner
              color={variant === 'primary' ? 'neutral10' : undefined}
              size="small"
            />
            <div className={styles['button-loadingOverlay']} />
          </>
        )
      }
      {children}
    </button>
  );
};

export default Button;
