import { styled } from "linaria/react";
import { neutral, primary } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";

/**
 * An input without border, for creating an "editable page title".
 */
export const PrimaryInput = styled.input`
  display: block;
  font-size: 1.5rem;
  height: 70px;
  padding: 0 1.5rem;

  border: none;
  border-bottom: 2px solid ${neutral[100]};
  outline: none;

  transition: border-color ${shortTime};

  ::placeholder {
    color: ${neutral[300]};
  }

  &:hover {
    border-color: var(--color-100, ${primary[100]});
  }

  &:focus {
    border-color: var(--color-300, ${primary[300]});
  }
`;
