import React, { ComponentProps } from "react";
import { css, cx } from "linaria";
import { styled } from "linaria/react";

import { neutral, orange } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";

/** Props for the input component. */
export interface InputProps extends ComponentProps<"input"> {
  /**
   * Whether the input should use a multiline input component (i. e. textarea)
   * or not.
   */
  multiline?: boolean;

  /**
   * When using a multiline input, the number of rows.
   *
   * Defaults to 7, must be > 0.
   */
  rows?: number;
}

const StyledInput = styled.input<InputProps>`
  /* resets */
  -webkit-appearance: none;
  outline-style: none;
  box-shadow: none;
  border: none;
  display: block;
  background: white;
  box-sizing: border-box;

  font-size: 1rem;
  height: auto;
  min-height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  box-shadow: 0 0 0 0.09rem inset ${neutral[200]};
  transition: box-shadow ${shortTime};

  margin: 0;

  ::placeholder {
    color: ${neutral[300]};
  }

  :hover {
    box-shadow: 0 0 0 0.09rem inset var(--color-100, ${orange[100]});
  }

  :focus {
    box-shadow: 0 0 0 0.09rem inset var(--color-300, ${orange[300]});
  }
`;

const multiline = css`
  padding: 0.75rem 1rem;
  resize: none;
`;

/**
 * An input component. Optionally supports multiline input via textarea.
 *
 * All props are spread to the respective input / textarea element.
 */
export const Input: React.SFC<InputProps> = props => {
  if (typeof props.rows === "number" && props.rows <= 0) {
    throw new Error("rows must be > 0");
  }

  return props.multiline ? (
    <StyledInput
      as="textarea"
      className={cx(multiline, props.className)}
      rows={props.rows || 7}
      {...props}
    />
  ) : (
    <StyledInput {...props} />
  );
};
