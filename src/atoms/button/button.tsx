import React from "react";
import { css, cx } from "linaria";
import { styled } from "linaria/react";

import { Color, primary, neutral } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";
import { iconCl } from "../icons/icons";

export interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  color?: Color;
  children?: Array<React.ReactNode> | React.ReactNode;
}

const selectColor = (variant: number) => (props: ButtonProps) =>
  props.primary
    ? `var(--color-${variant}, ${primary[variant]})`
    : props.color
    ? props.color[variant]
    : neutral[variant];

const StyledButton = styled.button<ButtonProps & { className: string }>`
  /* theming */
  background: ${selectColor(100)};
  color: ${selectColor(900)};

  /* resets */
  border: none;
  outline-style: none;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  padding: 0 1rem;
  border-radius: 2rem;
  cursor: pointer;

  margin: 0.5rem 0;
  height: 2.5rem;

  text-transform: uppercase;

  transition: background-color ${shortTime}, color ${shortTime};

  :hover {
    background: ${selectColor(200)};
  }

  :active {
    filter: brightness(90%);
  }

  .${iconCl}:first-child {
    margin-left: -0.25em;
  }

  .${iconCl}:last-child {
    margin-right: -0.25em;
  }

  .${iconCl}:only-child {
    margin-left: -0.35em;
    margin-right: -0.35em;
  }

  > * {
    margin: 0 0.25em;
    display: inline-block;
  }
`;

const disabled = css`
  &,
  &:hover,
  &:active {
    color: ${neutral[200]};
    background: ${neutral[50]};
    cursor: not-allowed;
  }
`;

export const Button = (props: ButtonProps & Omit<React.ComponentProps<"button">, "color">) => (
  <StyledButton {...props} className={cx(props.disabled && disabled)} />
);
