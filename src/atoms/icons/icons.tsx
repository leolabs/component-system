import React, { ComponentProps } from "react";
import { Icon as Feather, Props as FeatherProps } from "react-feather";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { css } from "linaria";

export const iconCl = css`
  display: inline-block;
  width: auto;
  height: 1.2em;
  vertical-align: top;
`;

export const FontAwesomeIcon: React.FC<{ icon: IconDefinition } & ComponentProps<"svg">> = ({
  icon,
}) => (
  <svg
    className={iconCl}
    viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}
    width={Math.max(icon.icon[0], icon.icon[1])}
    height={Math.max(icon.icon[0], icon.icon[1])}
    preserveAspectRatio="xMidYMid"
  >
    <path fill="currentColor" d={icon.icon[4]} />
  </svg>
);

export const FeatherIcon: React.FC<{ icon: Feather } & FeatherProps> = ({
  icon: Icon,
  ...props
}) => <Icon size="" {...props} className={iconCl} />;
