import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';

import { InputProps, InputRef, InputValueReference } from './interfaces';
import { Container, TextInput, Icon } from './styles';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  name, icon, error, onInputText, ...rest
}, ref) => {
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputValueRef = useRef<InputValueReference>({ value: '' });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#0118B5' : '#666360'}
      />

      <TextInput
        ref={inputElementRef}
        name={name}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue=""
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => onInputText(value)}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
