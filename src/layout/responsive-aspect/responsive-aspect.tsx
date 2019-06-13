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

export const ResponsiveAspect: typeof ResponsiveAspectOuter = props => (
  <ResponsiveAspectOuter {...props}>
    <ResponsiveAspectInner>{props.children}</ResponsiveAspectInner>
  </ResponsiveAspectOuter>
);
