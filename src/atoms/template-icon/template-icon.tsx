import React from "react";
import c from "color";
import { styled } from "linaria/react";
import { Color } from "../../theme/colors/colors";
import { shortTime } from "../../theme/timing/timing";
import { iconCl } from "../icons/icons";
import { ResponsiveAspect } from "../../layout/responsive-aspect/responsive-aspect";

const TemplateIconInner = styled.div<{ selected?: boolean; color: Color }>`
  display: flex;
  position: absolute;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0.5rem;

  transition: box-shadow ${shortTime};
  box-shadow: ${p =>
    p.selected
      ? `0 3px 6px ${c(p.color[600]).alpha(0.16)}, 0 3px 6px ${c(p.color[600]).alpha(0.23)}`
      : "none"};

  color: ${p => p.color[700]};
  background: ${p => p.color[100]};

  .${iconCl} {
    width: 50%;
    height: auto;
  }
`;

export const TemplateIcon: typeof TemplateIconInner = props => (
  <ResponsiveAspect ratio={1} {...props}>
    <TemplateIconInner color={props.color} selected={props.selected}>
      {props.children}
    </TemplateIconInner>
  </ResponsiveAspect>
);

export const StaticTemplateIcon = styled(TemplateIcon)`
  max-width: 80px;
`;
