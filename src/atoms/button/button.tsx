import React from "react";
import { styled } from "linaria/react";
import * as colors from "../../theme/colors/colors";
import { iconCl } from "../icons/icons";
import { Color } from "../../theme/colors/colors";
import { css } from "linaria";

const { neutral, primary } = colors;

export interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  color?: keyof typeof colors;
  children: Array<React.ReactNode> | React.ReactNode;
}

const selectColor = (variant: keyof Color) => (props: ButtonProps) =>
  props.primary
    ? `var(--color-${variant}, ${primary[variant]})`
    : props.color
    ? colors[props.color][variant]
    : neutral[variant];

const StyledButton = styled.button<ButtonProps & { className: string }>`
  /* theming */
  background: ${selectColor(100)};
  color: ${selectColor(900)};

  /* resets */
  border: none;
  outline-style: none;
  -webkit-appearance: none;
  display: block;

  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;

  margin: 0.5rem 0;

  transition: background-color 0.4s, color 0.4s;

  :hover {
    background: ${selectColor(200)};
  }

  :active {
    background: ${selectColor(900)};
    color: ${selectColor(200)};
  }

  .${iconCl}:first-child {
    margin-left: -0.25rem;
  }

  .${iconCl}:last-child {
    margin-right: -0.25rem;
  }

  > * {
    margin: 0 0.25rem;
    display: inline-block;
  }
`;

const disabled = css`
  &,
  &:hover,
  &:active {
    color: ${neutral[400]};
    background: ${neutral[800]};
    cursor: not-allowed;
  }
`;

export const Button = (
  props: ButtonProps &
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => <StyledButton {...props} className={props.disabled ? disabled : ""} />;
