import React from "react";
import { Color, primary } from "../colors/colors";
import { css } from "linaria";
import classNames from "classnames";

interface ThemeProps {
  className?: string;
  color?: Color;
  style?: any;
}

const themeCss = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const createVariables = (color: Color) =>
  Object.keys(color).reduce(
    (acc, cur) => {
      acc[`--color-${cur}`] = color[cur];
      return acc;
    },
    {} as { [k: string]: string },
  );

export const Theme: React.FC<ThemeProps> = ({ className, color, children, style }) => {
  const themeStyle = { ...style, ...(color ? createVariables(color) : createVariables(primary)) };
  return (
    <div style={themeStyle} className={classNames(themeCss, className)}>
      {children}
    </div>
  );
};
