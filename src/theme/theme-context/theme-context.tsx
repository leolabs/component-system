import React from "react";
import { Color, primary } from "../colors/colors";
import { css, cx } from "linaria";

interface ThemeProps {
  className?: string;
  color?: Color;
  style?: React.CSSProperties;
}

const themeCss = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const createVariables = (color: Color): { [k: string]: string } =>
  Object.keys(color).reduce((acc, cur) => {
    acc[`--color-${cur}`] = color[cur];
    return acc;
  }, {});

export const Theme: React.FC<ThemeProps> = ({ className, color, children, style }) => {
  const themeStyle = { ...style, ...(color ? createVariables(color) : createVariables(primary)) };
  return (
    <div style={themeStyle} className={cx(themeCss, className)}>
      {children}
    </div>
  );
};
