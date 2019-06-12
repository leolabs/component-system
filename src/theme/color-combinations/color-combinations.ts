import { orange, neutral } from "../colors/colors";

export interface ColorCombination {
  bg: string;
  fg: string;
}

export const primary: ColorCombination = {
  bg: orange[100],
  fg: orange[900],
};

export const secondary: ColorCombination = {
  bg: neutral[100],
  fg: neutral[800],
};

export const themeBlue: ColorCombination = {
  bg: "#CCF1FC",
  fg: "#2285A3",
};

export const themeYellow: ColorCombination = {
  bg: "#FCEEC7",
  fg: "#F7C335",
};

export const themeTeal: ColorCombination = {
  bg: "#D1FDF1",
  fg: "#23A381",
};

export const themeRed: ColorCombination = {
  bg: "#FDDBD0",
  fg: "#A24022",
};

export const themeViolet: ColorCombination = {
  bg: "#F2D4FD",
  fg: "#7F22A1",
};

export const themeGreen: ColorCombination = {
  bg: "#DBFDCE",
  fg: "#45A323",
};
