import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  error?: string;
  containerStyle?: {};
  onInputText: (value: string) => void;
}

export interface InputValueReference {
  value: string;
}

export interface InputRef {
  focus(): void;
}
