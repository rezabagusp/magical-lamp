import React, { useState } from 'react';
import cn from 'classnames';
import Button from '../../button';
import RemoveableTextInput from './removeableTextInput';
import Icon from '../../icon';

interface Props {
  className?: string,
  texts: string[],
  addTitle?: string,
  initialInputCount?: number,
  inputPlaceholder?: string,
  onChange?: (texts: string[]) => void,
  error?: boolean,
}

const MultipleTextInput = ({
  className,
  texts: initialTexts,
  addTitle = 'Add new input',
  initialInputCount = 3,
  inputPlaceholder,
  onChange,
  error,
}: Props) => {
  const [texts, setTexts] = useState<string[]>(
    initialTexts.length ? initialTexts : Array(initialInputCount).fill(''),
  );

  const handleRemoveText = (removeIndex: number) => {
    if (texts.length > 1) {
      let newTexts: string[] = texts.slice();
      newTexts = newTexts.filter((_, index) => index !== removeIndex);
      setTexts(newTexts);
      if (onChange) onChange(newTexts);
    }
  };

  const handleChangeText = (
    newVal: string,
    idx: number,
  ) => {
    const newTexts: string[] = texts.slice();
    newTexts[idx] = newVal;

    setTexts(newTexts);
    if (onChange) onChange(newTexts);
  };

  const handleAddInputText = () => {
    const newTexts: string[] = texts.slice();
    newTexts.push('');

    setTexts(newTexts);
  };

  const renderInputs = () => texts.map((text: string, idx: number) => {
    const key = `input-${idx + 1}`;

    return (
      <RemoveableTextInput
        className={cn(
          { 'mb-2': idx < texts.length - 1 },
        )}
        key={key}
        text={text}
        index={idx}
        onRemoveText={handleRemoveText}
        onChangeText={handleChangeText}
        placeholder={inputPlaceholder}
        removeable={texts.length === 1}
      />
    );
  });

  return (
    <div
      className={cn(
        'relative px-2 py-4 border border-solid border-neutral-50 rounded-lg',
        className,
        error && ' border-2 border-error',
      )}
    >
      {renderInputs()}
      <div className="flex justify-end w-full">
        <Button
          variant="primaryOutline"
          className="mt-8 !w-60"
          onClick={handleAddInputText}
        >
          <Icon
            className="mr-3"
            icon="circlePlusOutline"
            color="primaryMain"
            size={24}
          />
          {addTitle}
        </Button>
      </div>
    </div>
  );
};

export default MultipleTextInput;
