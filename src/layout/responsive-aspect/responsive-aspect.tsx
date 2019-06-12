import React from "react";
import { styled } from "linaria/react";

const ResponsiveAspectInner = styled.div<{ ratio: number }>`
  position: relative;
  height: 0;
  padding-bottom: ${p => p.ratio * 100}%;
`;

const ResponsiveAspectOuter = styled.div<{ ratio: number }>``;

export const ResponsiveAspect: typeof ResponsiveAspectOuter = props => (
  <ResponsiveAspectOuter {...props}>
    <ResponsiveAspectInner ratio={props.ratio}>{props.children}</ResponsiveAspectInner>
  </ResponsiveAspectOuter>
);
