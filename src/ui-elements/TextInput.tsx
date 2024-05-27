import React from "react";

import {InputWrapper} from "./InputWrapper";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}) => {
  return (
    <InputWrapper>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="w-full"
        required={required}
      />
    </InputWrapper>
  );
};
