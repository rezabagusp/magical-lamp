import React, { ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  className?: string,
  htmlFor?: string,
  children: ReactNode,
  required?: boolean,
  subLabel?: ReactNode,
}

const Label = ({
  className,
  htmlFor,
  children,
  required,
  subLabel,
}: Props) => (
  <label
    className={cn(
      'block text-xs font-semibold mb-1',
      className,
    )}
    htmlFor={htmlFor}
  >
    {children}
    {required && (
      <span className="text-error">
        *
      </span>
    )}
    {subLabel && (
      <div className="font-medium text-neutral-80 mt-2">
        {subLabel}
      </div>
    )}
  </label>
);

export default Label;
