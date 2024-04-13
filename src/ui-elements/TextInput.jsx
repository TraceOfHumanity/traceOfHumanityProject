import React from "react";

import { InputWrapper } from "./InputWrapper";

export const TextInput = ({ value, onChange }) => {
  return (
    <InputWrapper>
      <input type="text" value={value} onChange={onChange} />
    </InputWrapper>
  );
};
