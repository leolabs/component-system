import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";

import * as colors from "../colors/colors";
import * as colorCombinations from "../color-combinations/color-combinations";
import { Theme } from "./theme";

const ColorThemedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  padding: 0.5rem;

  background-color: var(--color-100, var(--color-bg));
  color: var(--color-800, var(--color-fg));
`;

storiesOf("Theme / Colors / Theming", module)
  .add("With Color", () => (
    <Theme color={colors.indigo}>
      <ColorThemedBlock>Text</ColorThemedBlock>
    </Theme>
  ))
  .add("With Color Combination", () => (
    <Theme colorCombination={colorCombinations.themeViolet}>
      <ColorThemedBlock>Text</ColorThemedBlock>
    </Theme>
  ));
