import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import cn from 'classnames';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Icon from '../../icon';
import OptionList from '../../optionList';
import { Option } from '../../../types/misc';

interface Props {
  className?: string,
  value: Option | null,
  placeholder?: string,
  options: (Option)[],
  onChange: (newValue: Option | null) => void,
  error?: boolean,
  disabled?: boolean,
  loading?: boolean,
  searchable?: boolean,
}

const SelectOption = ({
  className,
  value = null,
  placeholder = 'Select...',
  options,
  onChange,
  error,
  disabled,
  loading,
  searchable = false,
}: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const searchBoxRef = useRef<HTMLInputElement>(null);
  const menuNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showOptions && searchable && searchBoxRef?.current) {
      searchBoxRef.current.focus();
    }
  }, [searchable, showOptions]);

  useOnClickOutside(menuNodeRef, () => setShowOptions(false));

  const handleSelect = (option: Option | null): void => {
    setShowOptions(false);
    onChange(option);
  };

  const handleShowOptions = (): void => {
    setShowOptions(true);
  };

  const renderSelectInputContent = () => (
    <div
      className={cn(
        'px-4 py-3 border border-neutral-50 rounded-lg',
        error && 'border-2 border-error',
        !disabled && 'cursor-pointer',
      )}
      onClick={() => !disabled && handleShowOptions()}
    >
      <div className="flex items-center justify-between">
        {
          value
            ? (
              <p>
                {value.label}
              </p>
            )
            : (
              <p className="text-neutral-60">
                {placeholder}
              </p>
            )
        }
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        'relative text-base',
        className,
      )}
      ref={menuNodeRef}
    >
      {renderSelectInputContent()}
      <div className="absolute top-1/2 -translate-y-1/2 right-3">
        <div className="flex items-center">
          {
            value && (
              <Icon
                icon="close"
                size={16}
                color="neutral100"
                onClick={() => onChange(null)}
                cursorPointer
              />
            )
          }
          <Icon
            icon="chevron"
            className={cn(
              'rotate-90',
              { '!-rotate-90': showOptions },
              value && 'ml-1',
            )}
            size={18}
            color="neutral100"
            cursorPointer
          />
        </div>
      </div>
      {
        disabled && (
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-neutral-60 rounded-lg" />
        )
      }
      {
        showOptions && (
          <div className="mt-1">
            <OptionList
              className="absolute left-0 border"
              value={value}
              options={options}
              onChange={handleSelect}
              loading={loading}
            />
          </div>
        )
      }
    </div>
  );
};

export default SelectOption;
