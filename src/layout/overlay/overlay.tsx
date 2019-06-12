import { styled } from "linaria/react";

export const Overlay = styled.div<{ hidden?: boolean }>`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  transition: transform 0.4s;
  transform: ${p => (p.hidden ? "translateY(100%)" : "none")};
`;
