import React from "react";
import { css, cx } from "linaria";
import { styled } from "linaria/react";

import { neutral, orange } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";

export interface InputProps extends Partial<HTMLInputElement> {
  multiline?: boolean;
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

  font-size: 1rem;
  height: auto;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0 0.09rem inset ${neutral[200]};
  transition: box-shadow ${shortTime};

  margin: 0.125rem 0;

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

export const Input: React.SFC<InputProps> = props =>
  props.multiline ? (
    <StyledInput
      as="textarea"
      className={cx(multiline, props.className)}
      rows={props.rows || 7}
      {...props}
    />
  ) : (
    <StyledInput {...props} />
  );
