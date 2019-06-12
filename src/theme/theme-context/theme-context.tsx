import React from "react";
import { Color, primary } from "../colors/colors";

interface ThemeProps {
  color?: Color;
}

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
  return <div style={style}>{children}</div>;
};
