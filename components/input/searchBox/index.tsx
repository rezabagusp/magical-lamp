import React, { ChangeEvent, Ref } from 'react';
import cn from 'classnames';
import TextInput from '../textInput';
import Icon from '../../icon';

interface Props {
  className?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  setRef?: Ref<HTMLInputElement>,
}

const SearchBoxInput = ({
  className,
  value,
  onChange,
  placeholder = 'Search...',
  setRef,
}: Props) => (
  <TextInput
    setRef={setRef}
    value={value}
    onChange={onChange}
    className={cn('!py-2 !rounded', className)}
    prefixIcon={(
      <Icon className="mr-2" icon="search" size={24} color="neutral100" />
    )}
    placeholder={placeholder}
  />
);

export default SearchBoxInput;
