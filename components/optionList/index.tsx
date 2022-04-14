import React, { ReactNode } from 'react';
import cn from 'classnames';

import { LoadingSpinner } from '../loading';
import type { Option } from '../../types/misc';

import styles from './index.module.css';

interface EmptyStataWrapperProps {
  className?: string,
  children?: ReactNode,
}

const EmptyStataWrapper = ({ className, children }: EmptyStataWrapperProps) => (
  <div className={cn('p-5', className)}>
    {children}
  </div>
);

interface Props {
  className?: string,
  value: Option | null,
  options: (Option | null)[],
  onChange: (newValue: Option | null) => void,
  loading?: boolean,
  renderEmptyState?: () => JSX.Element,
}

const OptionList = ({
  className,
  value = null,
  options,
  onChange,
  loading,
  renderEmptyState,
}: Props) => {
  const handleSelect = (e: any, option: Option | null): void => {
    e.stopPropagation();
    onChange(option);
  };

  const renderDropdown = () => {
    if (loading) {
      return (
        <div className="w-full flex justify-center">
          <LoadingSpinner className="my-5" size="small" />
        </div>
      );
    }

    if (!options || !options.length) {
      if (renderEmptyState) {
        return (
          <EmptyStataWrapper>
            {renderEmptyState()}
          </EmptyStataWrapper>
        );
      }

      return (
        <EmptyStataWrapper>
          <p className="font-semibold text-center">No Item found.</p>
        </EmptyStataWrapper>
      );
    }

    return (
      <ul className="p-0 m-0 list-none">
        {
          options.map((option) => (
            <li
              className={cn(
                'text-base cursor-pointer line-clamp1 px-4 py-4 hover:bg-neutral-30',
                { 'bg-neutral-30': value?.value === option?.value },
              )}
              key={option?.value}
              onClick={(e) => handleSelect(e, option)}
            >
              {option?.label}
            </li>
          ))
        }
      </ul>
    );
  };

  return (
    <div
      className={cn(
        styles.optionList,
        className,
      )}
    >
      {renderDropdown()}
    </div>
  );
};

export default OptionList;
