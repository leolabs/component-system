import React from "react";
import { Color, primary } from "../colors/colors";
import { css } from "linaria";

interface ThemeProps {
  color?: Color;
}

const themeCss = css`
  font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
`;

const createVariables = (color: Color) =>
  Object.keys(color).reduce(
    (acc, cur) => {
      acc[`--color-${cur}`] = color[cur];
      return acc;
    },
    {} as { [k: string]: string },
  );

export const Theme: React.FC<ThemeProps> = ({ color, children }) => {
  const style = color ? createVariables(color) : createVariables(primary);
  return (
    <div style={style} className={themeCss}>
      {children}
    </div>
  );
};
