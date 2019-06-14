import { styled } from "linaria/react";
import React from "react";

import { Button } from "../../atoms/button/button";
import { Color, neutral } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";

export interface ButtonInputProps {
  canSubmit?: boolean;
  className?: string;
  color?: Color;
  disabled?: boolean;
  icon: React.ReactNode;
  placeholder?: string;
  value?: string;
  type?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Btn = styled(Button)`
  border-radius: 0 2rem 2rem 0;
  margin: 0;
  padding: 0 1.5rem;

  transition: background-color ${shortTime} ease;
`;

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

  :focus-within ${Btn as any}:not(:disabled) {
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
  className,
  color,
  disabled,
  icon,
  placeholder,
  value,
  type,

  onChange,
  onSubmit,
}) => (
  <Form className={className} onSubmit={onSubmit}>
    <Input
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
    <Btn color={color} disabled={disabled || !canSubmit} type="submit">
      {icon}
    </Btn>
  </Form>
);
