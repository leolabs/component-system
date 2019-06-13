import React from "react";
import { styled } from "linaria/react";

import { Color, neutral } from "../../theme/colors/colors";

export interface WellProps {
  className?: string;
  color?: Color;
  primary?: boolean;
}

const Wrapper = styled.div`
  border-radius: 2rem;
  padding: 1.5rem 2rem;

  background-color: ${({ color, primary }: WellProps) =>
    color ? color[100] : primary ? "var(--color-100)" : neutral[100]};

  > *:first-child {
    margin-bottom: 1rem;
  }
`;

export const Well: React.FC<WellProps> = ({ children, className, color, primary }) => (
  <Wrapper className={className} color={color} primary={primary}>
    {children}
  </Wrapper>
);
