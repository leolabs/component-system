import { styled } from "linaria/react";
import React from "react";

import { Button } from "../../atoms/button/button";
import { Color, neutral } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";

export interface ButtonInputProps {
  canSubmit?: boolean;
  color?: Color;
  disabled?: boolean;
  icon: React.ReactNode;
  placeholder?: string;
  value: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Form = styled.form`
  border: 2px solid ${neutral[100]};
  border-radius: 2rem;

  display: flex;
  align-items: stretch;

  height: 2.5rem;

  transition: border-color ${shortTime} ease;

  :focus-within {
    border-color: var(--color-300);
  }

  button {
    border-radius: 0 2rem 2rem 0;
    margin: 0;
    padding: 0 1.5rem;

    transition: background-color ${shortTime} ease;
  }
  :focus-within button:not(:disabled) {
    background-color: var(--color-300);
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 2rem;
  font-size: 1rem;

  flex-grow: 1;
  padding: 0 1.25rem;

  outline: none;

  :disabled {
    opacity: 0.5;
  }
`;

export const ButtonInput: React.SFC<ButtonInputProps> = ({
  canSubmit,
  color,
  disabled,
  icon,
  placeholder,
  value,

  onChange,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit}>
    <Input disabled={disabled} onChange={onChange} placeholder={placeholder} value={value} />
    <Button color={color} disabled={disabled || !canSubmit} type="submit">
      {icon}
    </Button>
  </Form>
);
