import { styled } from "linaria/react";
import React from "react";

import { neutral } from "../../theme/colors/colors";

/** Props for the jumbo component. */
export interface JumboProps extends React.ComponentProps<"div"> {
  /**
   * The jumbo background (image).
   *
   * When set, the jumbo adds a colored overlay in `backgroundColor`.
   */
  background?: React.ReactNode;

  /** The color of the background of the jumbo. */
  backgroundColor?: string;
}

const Base = styled.div<JumboProps>`
  box-sizing: border-box;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 3rem 2rem;
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

const Overlay = styled.div<{ hasBg: boolean; backgroundColor?: string }>`
  content: "";
  display: block;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: ${p => (p.hasBg ? "var(--color-500)" : p.backgroundColor || neutral[100])};
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;

  > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

/**
 * A jumbo optionally with a background image.
 *
 * For best results, use together with typography variants `heading-1` and `heading-2`.
 */
export const Jumbo: typeof Base = ({ background, backgroundColor, children, ...props }) => (
  <Base {...props}>
    {typeof background === "string" ? <img src={background} alt="Jumbo" /> : background}
    <Overlay hasBg={Boolean(background)} backgroundColor={backgroundColor} />

    <Wrapper>{children}</Wrapper>
  </Base>
);
