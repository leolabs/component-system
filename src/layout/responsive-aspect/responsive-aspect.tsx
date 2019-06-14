import React from "react";
import { styled } from "linaria/react";

const ResponsiveAspectInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ResponsiveAspectOuter = styled.div<{ ratio: number }>`
  position: relative;
  display: flex;

  &:before {
    content: "";
    padding-bottom: ${p => p.ratio * 100}%;
  }
`;

/**
 * A wrapper component that enforces a fixed aspect `ratio` while not fixing
 * specific sizes.
 *
 * The inner element must be `position: absolute` and
 * `top / left / bottom / right: 0` (i. e. it needs to fill its parent completely).
 */
export const ResponsiveAspect: typeof ResponsiveAspectOuter = props => {
  if (props.ratio <= 0) {
    throw new Error("invalid aspect ratio");
  }

  return (
    <ResponsiveAspectOuter {...props}>
      <ResponsiveAspectInner>{props.children}</ResponsiveAspectInner>
    </ResponsiveAspectOuter>
  );
};
