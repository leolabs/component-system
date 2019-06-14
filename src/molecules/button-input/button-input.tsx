import { styled } from "linaria/react";
import React from "react";

import { Button } from "../../atoms/button/button";
import { Color, neutral } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";

/** Props for the ButtonInput. */
export interface ButtonInputProps {
  /**
   * Whether the form can be submitted.
   *
   * This disables the button while leaving the input intact.
   * Used for validation.
   */
  canSubmit?: boolean;

  /** A CSS class name that is passed through to the root element. */
  className?: string;

  /**
   * The color to use as border / button color.
   *
   * Taken from the current theme, if not specified otherwise.
   */
  color?: Color;

  /**
   * Whether the form is disabled.
   */
  disabled?: boolean;

  /** The icon to show on the button. */
  icon: React.ReactNode;

  /** The input placeholder text. */
  placeholder?: string;

  /** The input's value. */
  value?: string;

  /** The input's type. */
  type?: string;

  /** Fired when the input value changes. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** Fired on button click. */
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Btn = styled(Button)`
  border-radius: 0 2rem 2rem 0;
  margin: 0;
  padding: 0 1.5rem;

  transition: background-color ${shortTime} ease;
`;

const Form = styled.form<React.ComponentProps<"form"> & { bgColor?: Color }>`
  border: 2px solid ${neutral[100]};
  border-radius: 2rem;

  display: flex;
  align-items: stretch;

  height: 2.5rem;

  transition: border-color ${shortTime} ease;

  :focus-within {
    border-color: ${({ bgColor }) => (bgColor ? bgColor[300] : "var(--color-300)")};
  }

  :focus-within ${Btn as any}:not(:disabled) {
    border-color: ${({ bgColor }) => (bgColor ? bgColor[300] : "var(--color-300)")};
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

/**
 * A form consisting of a single-line input with a submit button.
 */
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
  <Form className={className} bgColor={color} onSubmit={onSubmit}>
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
