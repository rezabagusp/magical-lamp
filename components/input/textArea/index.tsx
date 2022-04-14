import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import TextareaAutoSize from 'react-textarea-autosize';

type Props = {
  className?: string,
  id?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  minRows?: number,
  maxRows?: number,
  resizeable?: boolean,
  placeholder?: string,
  error?: boolean,
  [x:string]: any,
};

const TextArea = ({
  className,
  value,
  onChange,
  minRows = 2,
  maxRows = 4,
  resizeable = true,
  placeholder,
  error,
  ...restProps
}: Props) => (
  <TextareaAutoSize
    className={cn(
      'border border-solid border-neutral-50 w-full outline-none resize-none rounded-lg py-3 px-3 text-neutral-100 font-medium',
      resizeable && 'resize-y',
      error && 'border-2 border-error',
      className,
    )}
    value={value}
    onChange={onChange}
    minRows={minRows}
    maxRows={maxRows}
    placeholder={placeholder}
    {...restProps}
  />
);

export default TextArea;
