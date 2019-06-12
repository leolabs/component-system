import { styled } from "linaria/react";
import React from "react";

export interface JumboProps {
  background?: React.ReactNode;
  className?: string;
}

const Body = styled.div`
  box-sizing: border-box;

  padding: 1rem;
  position: relative;

  width: 100%;

  > img {
    position: absolute;
    z-index: -1;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
`;

export const Jumbo: React.FC<JumboProps> = ({ background, className, children }) => (
  <Body className={className}>
    {typeof background === "string" ? <img src={background} /> : background}

    <Wrapper>{children}</Wrapper>
  </Body>
);
