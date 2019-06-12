import { styled } from "linaria/react";
import { neutral, primary } from "../../theme/colors/colors";

export const PrimaryInput = styled.input`
  display: block;
  font-size: 1.5rem;
  height: 70px;
  padding: 0 1.5rem;

  border: none;
  border-bottom: 2px solid ${neutral[100]};
  outline: none;

  transition: border-color 0.4s;

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
