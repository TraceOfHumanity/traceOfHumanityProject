import React from "react";

import { InputWrapper } from "./InputWrapper";

export const TextInput = ({
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
        onChange={onChange}
        placeholder={placeholder}
        className="w-full"
        required={required}
      />
    </InputWrapper>
  );
};
