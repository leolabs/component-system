import React from "react";
import { styled } from "linaria/react";
import { Typography } from "../../atoms/typography/typography";
import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Menu } from "react-feather";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 0 0.75rem 0 1.5rem;
  background: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;

  z-index: 1000;

  > :first-child {
    margin-right: auto;
  }
`;

/**
 * Ugly hack to support having additional
 * content fixed to the top.
 *
 * Feel free to refactor.
 */
const ChildWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const Header: React.FC<React.ComponentProps<typeof StyledHeader>> = ({
  children,
  ...cProps
}) => (
  <StyledHeader {...cProps}>
    <Typography variant="title">Wevent</Typography>
    <Button noBackground primary>
      <FeatherIcon icon={Menu} />
    </Button>
    {children && <ChildWrapper>{children}</ChildWrapper>}
  </StyledHeader>
);
