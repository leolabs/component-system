import React from "react";
import { Color, primary } from "../../theme/colors/colors";
import { ColorCombination } from "../../theme/color-combinations/color-combinations";

interface ThemeProps {
  color?: Color;
  colorCombination?: ColorCombination;
}

const createVariables = (color: Color) =>
  Object.keys(color).reduce(
    (acc, cur) => {
      acc[`--color-${cur}`] = color[cur];
      return acc;
    },
    {} as { [k: string]: string },
  );

export const Theme: React.FC<ThemeProps> = ({ color, colorCombination, children }) => {
  const style = {
    ...(color ? createVariables(color) : createVariables(primary)),
    ...(colorCombination
      ? { "--color-fg": colorCombination.fg, "--color-bg": colorCombination.bg }
      : {}),
  };

  return <div style={style}>{children}</div>;
};
