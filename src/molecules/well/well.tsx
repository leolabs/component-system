import React from "react";
import { styled } from "linaria/react";

import { Color, neutral } from "../../theme/colors/colors";
import { createVariables } from "../../theme/theme-context/theme-context";

export interface WellProps {
  className?: string;
  color?: Color;
  primary?: boolean;
}

const Wrapper = styled.div<WellProps & { style: Record<string, string> }>`
  border-radius: 2rem;
  padding: 1.5rem 2rem;

  background-color: ${({ color, primary }: WellProps) =>
    color ? color[100] : primary ? "var(--color-100)" : neutral[100]};

  > *:first-child {
    margin-bottom: 1rem;
  }
`;

/**
 * A simple well that can contain content.
 *
 * @example
 * ```
 * <Well>
 *   <Typography variant="heading-1">A Title</Typography>
 *   <Typography variant="body-1">This is some content.</Typography>
 * </Well>
 * ```
 */
export const Well: React.FC<WellProps> = ({ children, className, color, primary }) => (
  <Wrapper
    className={className}
    color={color}
    primary={primary}
    style={color ? createVariables(color) : {}}
  >
    {children}
  </Wrapper>
);
