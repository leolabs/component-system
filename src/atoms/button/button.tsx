import { styled } from "linaria/react";

export interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${p => (p.primary ? "red" : "green")};
`;
