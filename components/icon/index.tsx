import React from 'react';
import cn from 'classnames';
import icons from './svg';
import styles from './index.module.css';

interface Props {
  icon: 'passwordEye' | 'chevron' | 'hamburger' | 'appLogo'
      | 'email' | 'roundedInfo' | 'close' | 'arrow'
      | 'checkCircle' | 'calendar' | 'trash' | 'circlePlusOutline'
      | 'bankCard' | 'copy' | 'peopleAlt' | 'speaker' | 'plus'
      | 'chevronRound' | 'person' | 'mail',
  /**
   * if size provided, height & width props will be avoided
   */
  size?: number,
  width?: number,
  height?: number,
  color?: 'neutral60' | 'neutral100' | 'neutral10' | 'primaryMain'
      | 'primaryHover',
  className?: string,
  onClick?: () => void,
  cursorPointer?: boolean,
}

const Icon: any = ({
  icon,
  size = 24,
  width,
  height,
  color,
  className,
  onClick,
  cursorPointer,
}: Props) => {
  const baseClasses = {
    iconGray10: styles['icon--neutral10'],
    iconGray60: styles['icon--neutral60'],
    iconGray100: styles['icon--neutral00'],
    iconPrimaryMain: styles['icon--primaryMain'],
    iconPrimaryHover: styles['icon--primaryHover'],
    cursorPointer: 'cursor-pointer',
  };

  const propsClass = {
    [baseClasses.iconGray10]: color === 'neutral10',
    [baseClasses.iconGray60]: color === 'neutral60',
    [baseClasses.iconPrimaryMain]: color === 'primaryMain',
    [baseClasses.iconPrimaryHover]: color === 'primaryHover',
    [baseClasses.cursorPointer]: !!cursorPointer,
  };

  const SVGIcon: React.ElementType = icons[icon] as React.ElementType || undefined;

  if (!SVGIcon) {
    return null;
  }

  let sizeWidth: number;
  let sizeHeight: number;

  if (width && height) {
    sizeWidth = width;
    sizeHeight = height;
  } else {
    sizeWidth = size;
    sizeHeight = size;
  }

  return (
    <SVGIcon
      onClick={onClick}
      className={cn(
        styles.icon,
        propsClass,
        className,
      )}
      width={sizeWidth}
      height={sizeHeight}
    />
  );
};

export default Icon;
