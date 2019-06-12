import React from "react";
import * as FeatherIcons from "react-feather";
import { css } from "linaria";

export const iconCl = css`
  display: inline-block;
  width: auto;
  height: 1.2em;
  vertical-align: top;
`;

export type IconMap = typeof FeatherIcons;

export const Icons: IconMap = Object.entries(FeatherIcons).reduce(
  (out, [name, Icon]) => {
    out[name] = (props: FeatherIcons.Props) => <Icon size="" {...props} className={iconCl} />;
    return out;
  },
  {} as IconMap,
);
export default FeatherIcons;
