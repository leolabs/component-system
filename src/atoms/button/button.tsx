import React from "react";
import { css, cx } from "linaria";
import { styled } from "linaria/react";

import { Color, primary, neutral } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";
import { iconCl } from "../icons/icons";

/** Props for the button component. */
export interface ButtonProps extends Omit<React.ComponentProps<"button">, "color"> {
  /** Button contents. Can be text, icons, typographies, etc. */
  children?: React.ReactNode[] | React.ReactNode;

  /**
   * The button's color. Affects background and font color.
   *
   * Overrides the `primary` setting.
   */
  color?: Color;

  /** Whether the button is disabled or not. */
  disabled?: boolean;

  /** Whether the button shall be shown without a background. */
  noBackground?: boolean;

  /**
   * Whether the button is a primary button or not.
   *
   * When set, renders the button using the theme color. Overriden by
   * `color`-setting.
   */
  primary?: boolean;

  /** Whether the button is selected. */
  selected?: boolean;
}

const selectColor = (variant: number) => (props: ButtonProps) =>
  props.primary
    ? `var(--color-${variant}, ${primary[variant]})`
    : props.color
    ? props.color[variant]
    : neutral[variant];

const StyledButton = styled.button<ButtonProps>`
  /* theming */
  background: ${p => (p.noBackground ? "none" : selectColor(100)(p))};
  color: ${p => (p.noBackground ? selectColor(500) : selectColor(800))(p)};

  /* resets */
  border: none;
  outline-style: none;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  font-size: 1rem;
  font-weight: 500;
  padding: 0 1rem;
  border-radius: 2rem;
  cursor: pointer;

  user-select: none;

  margin: 0;
  height: 2.5rem;

  text-transform: uppercase;

  transition: background-color ${shortTime}, color ${shortTime};

  ::after {
    content: "";
    display: block;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    border-radius: 2rem;

    box-shadow: ${props => (props.selected ? `0 3px 6px ${selectColor(600)(props)}` : "none")};
    opacity: 0.4;
    transition: box-shadow ${shortTime} ease;
  }

  :hover {
    background: ${p => (p.noBackground ? selectColor(50) : selectColor(200))(p)};
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

const noBackgroundDisabled = css`
  &,
  &:hover,
  &:active {
    color: ${neutral[200]};
    cursor: not-allowed;
  }
`;

/**
 * A colorable, selectable button.
 *
 * When showing text inside the button, use this together with a Typography
 * on variant `button`.
 *
 * With text:
 * @example
 * ```
 * <Button>
 *   <Typography variant="button">Button text</Typography>
 * </Button>
 * ```
 *
 * With text and icon:
 * @example
 * ```
 * <Button>
 *   <FeatherIcon icon={CheckCircle} />
 *   <Typography variant="button">Button text</Typography>
 * </Button>
 * ```
 */
export const Button: typeof StyledButton = props => (
  <StyledButton
    type="button"
    {...props}
    className={cx(
      props.className,
      props.disabled ? (props.noBackground ? noBackgroundDisabled : disabled) : null,
    )}
  />
);
