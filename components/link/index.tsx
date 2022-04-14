import React, {
  MouseEvent,
  MouseEventHandler,
  FocusEventHandler,
  CSSProperties,
  ReactNode,
} from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

interface Props {
  href: string | UrlObject,
  as?: string,
  label?: string,
  rel?: string,
  passHref?: boolean,
  style?: CSSProperties,
  target?: string,
  className?: string,
  children?: ReactNode,
  onClick?: (e?: MouseEvent | undefined) => void,
  onMouseOver?: MouseEventHandler,
  onMouseOut?: MouseEventHandler,
  onFocus?: FocusEventHandler,
  onBlur?: FocusEventHandler,
}

const LinkWrapper = ({
  href,
  as,
  label,
  rel,
  passHref,
  style,
  target,
  className,
  children,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
}: Props) => (
  <Link
    href={href}
    as={as}
    passHref={passHref}
    prefetch={false}
  >
    <a
      className={className}
      style={style}
      aria-label={label}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </a>
  </Link>
);

export default LinkWrapper;
