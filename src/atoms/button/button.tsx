import { styled } from "linaria/react";
import { neutral, primary } from "../../theme/colors/colors";

export interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  /* theming */
  background: ${p => (p.primary ? `var(--color-100, ${primary[100]})` : neutral[100])};
  color: ${p => (p.primary ? `var(--color-900, ${primary[900]})` : neutral[900])};

  /* resets */
  border: none;
  outline-style: none;
  -webkit-appearance: none;
  display: block;

  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;

  margin: 0.5rem 0;

  transition: background-color 0.4s, color 0.4s;

  :hover {
    background: ${p => (p.primary ? `var(--color-200, ${primary[200]})` : neutral[200])};
  }

  :active {
    background: ${p => (p.primary ? `var(--color-900, ${primary[900]})` : neutral[900])};
    color: ${p => (p.primary ? `var(--color-200, ${primary[200]})` : neutral[200])};
  }
`;
