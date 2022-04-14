import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';
import styles from './index.module.css';

type Props = {
  className?: string,
  id?: string,
  name?: string,
  checked: boolean,
  onChange: (checked: boolean) => void,
  children?: ReactNode,
};

const Checkbox: FunctionComponent<Props> = ({
  className,
  id,
  name,
  checked,
  onChange,
  children,
}) => (
  <div
    className={cn(
      'flex items-center cursor-pointer',
      { 'font-medium': checked },
      className,
    )}
    onClick={() => onChange(!checked)}
  >
    <div
      className={cn(
        styles.checkbox,
        checked && styles['is-checked'],
      )}
    >
      <input
        className={styles['checkbox-input']}
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className={styles['checkbox-checkMark']} />
    </div>
    {children}
  </div>
);

export default Checkbox;
