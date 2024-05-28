import React from "react";
import { KeyboardTypeOptions, TextInput } from "react-native";

type CustomInputProps = {
  className: string | undefined;
  placeholder: string | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  onChangeText: ((text: string) => void) | undefined;
  value: string | undefined;
};

export default function CustomInput({
  className,
  placeholder,
  keyboardType,
  onChangeText,
  value,
}: CustomInputProps) {
  return (
    <TextInput
      className={className}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}
