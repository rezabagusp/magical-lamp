import React, { ChangeEvent, useState } from 'react';
import { TextInput } from '../..';
import Icon from '../../../icon';

interface Props {
  className?: string,
  text?: string,
  index: number,
  onRemoveText: (index: number) => void,
  onChangeText: (newText: string, index: number) => void,
  placeholder?: string,
  removeable?: boolean,
}

const RemoveableTextInput = ({
  className,
  text: initialText,
  index,
  onRemoveText,
  onChangeText,
  placeholder,
  removeable = true,
}: Props) => {
  const [text, setText] = useState<string>(initialText || '');

  const handleChangeTextInput = (
    newVal: string,
    idx: number,
  ) => {
    setText(newVal);
    onChangeText(newVal, idx);
  };

  return (
    <div
      className={className}
    >
      <div className="flex items-center">
        <TextInput
          className="w-full"
          value={text}
          onChange={
            (
              e: ChangeEvent<HTMLInputElement>,
            ) => handleChangeTextInput(e.target.value, index)
          }
          placeholder={placeholder}
          icon={!removeable && (
            <Icon
              onClick={() => onRemoveText(index)}
              icon="close"
              color="primaryMain"
              size={24}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RemoveableTextInput;
