import React, {
  Ref,
  FormEventHandler,
  KeyboardEvent,
  ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
  className?: string,
  disabled?: boolean,
  placeholder?: string,
  type?: string,
  value?: string,
  onChange?: FormEventHandler<HTMLInputElement>,
  onFocus?: FormEventHandler<HTMLInputElement>,
  onBlur?: FormEventHandler<HTMLInputElement>,
  onKeyDown?: (e: KeyboardEvent) => void,
  id?: string,
  maxLength?: number,
  setRef?: Ref<HTMLInputElement>,
  prefixIcon?: ReactNode,
  icon?: ReactNode,
  error?: boolean,
  min?: number,
  [x: string]: any,
}

const filterInputNumberOnKeyDown = (evt: KeyboardEvent) => {
  if (['e', '+', '-'].includes(evt.key)) {
    evt.preventDefault();
  }
};

const TextInput = ({
  className,
  disabled,
  placeholder = 'Please input something...',
  type = 'text',
  value = '',
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  id,
  setRef,
  prefixIcon,
  icon,
  error,
  ...restProps
}: Props) => {
  const inputProps = {
    id,
    ref: setRef,
    className: 'text-base w-full border-none flex-1 h-full',
    value,
    onChange,
    onKeyDown: type === 'number' ? filterInputNumberOnKeyDown : onKeyDown,
    onFocus,
    onBlur,
    placeholder,
    type,
    disabled,
    ...restProps,
  };

  return (
    <div className={cn(
      styles.textInput,
      error && styles['is-error'],
      className,
    )}
    >
      <div className="flex items-center justify-between">
        {prefixIcon}
        <input {...inputProps} />
        {icon}
      </div>
      {
        disabled && (
          <div className={styles['textInput-disabledOverlay']} />
        )
      }
    </div>
  );
};

export default TextInput;
