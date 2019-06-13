import { styled } from "linaria/react";
import React from "react";

import { neutral } from "../../theme/colors/colors";

export interface JumboProps {
  background?: React.ReactNode;
}

const Base = styled.div`
  box-sizing: border-box;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 1.5rem 2rem;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: -1;

    width: 100%;
    height: 100%;

    object-fit: cover;
    filter: saturate(10%);
  }
`;

const Overlay = styled.div`
  content: "";
  display: block;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: ${(props: { hasBg: boolean }) =>
    props.hasBg ? "var(--color-500)" : neutral[100]};
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;

  > :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const Jumbo: React.FC<JumboProps> = ({ background, children }) => (
  <Base>
    {typeof background === "string" ? <img src={background} /> : background}
    <Overlay hasBg={Boolean(background)} />

    <Wrapper>{children}</Wrapper>
  </Base>
);
