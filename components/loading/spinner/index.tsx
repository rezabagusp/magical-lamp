import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

type Props = {
  className?: string,
  color?: 'primaryMain' | 'neutral10',
  size?: 'small' | 'medium',
};

const LoadingSpinner = ({
  className = '',
  color = 'primaryMain',
  size = 'medium',
}: Props) => {
  const baseClasses: { [key: string]: string } = {
    spnOrange: styles['spinner--primaryMain'],
    spnNeutral10: styles['spinner--neutral10'],
    spnSmall: styles['spinner--small'],
    spnMedium: styles['spinner--medium'],
  };

  const propsClass: { [key: string]: boolean } = {
    [baseClasses.spnOrange]: color === 'primaryMain',
    [baseClasses.spnNeutral10]: color === 'neutral10',
    [baseClasses.spnSmall]: size === 'small',
    [baseClasses.spnMedium]: size === 'medium',

  };

  const spinnerClass = cn(
    styles.spinner,
    propsClass,
    className,
  );

  return (
    <div className={spinnerClass}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default LoadingSpinner;
