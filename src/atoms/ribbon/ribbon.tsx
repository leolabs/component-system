import { styled } from "linaria/react";
import React from "react";

import { Typography } from "../typography/typography";

/** Props for the Ribbon component */
export interface RibbonProps {
  /** A CSS class name that will be applied to the root element. */
  className?: string;

  /** The ribbon's background color. */
  color?: string;
}

const Band = styled.div`
  background-color: ${(props: RibbonProps) => (props.color ? props.color : "var(--color-500)")};
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 158px;
  height: 28px;
  text-align: center;

  position: absolute;
  top: 2rem;
  right: -2rem;

  transform: rotate(45deg);
`;

const Wrapper = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  height: 100%;
  width: 100%;

  overflow: hidden;
  pointer-events: none;
`;

/**
 * An overlay ribbon in the top right corner. Renders it's children onto a
 * ribbon background.
 *
 * The parent element needs to be `position: relative` for correct placement.
 */
export const Ribbon: React.FC<RibbonProps> = ({ children, color, ...rest }) => (
  <Wrapper {...rest}>
    <Band color={color}>
      <Typography variant="ribbon">{children}</Typography>
    </Band>
  </Wrapper>
);
