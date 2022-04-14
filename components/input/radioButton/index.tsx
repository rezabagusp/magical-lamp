import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
  id?: string,
  name?: string,
  value: string,
  checked: boolean,
  onChange: (value: string) => void,
  className?: string,
  children: ReactNode,
}

const RadioButton = ({
  id,
  name = 'Radio Input',
  value,
  checked = false,
  onChange,
  className,
  children,
}: Props) => (
  <div
    className={cn(
      styles['radioButton-wrapper'],
      { 'font-semibold text-primary-pressed': checked },
      { 'text-neutral-80': !checked },
      className,
    )}
    onClick={() => !checked && onChange(value)}
  >
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={() => !checked && onChange(value)}
    />
    {children}
    <span className={styles['radioButton-checkmark']} />
  </div>
);

export default RadioButton;
