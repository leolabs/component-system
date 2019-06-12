import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";

import * as colors from "../colors/colors";
import { Theme } from "./theme-context";

const ColorThemedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  padding: 0.5rem;

  background-color: var(--color-100);
  color: var(--color-800);
`;

storiesOf("Theme / Colors", module).add("Theming", () => (
  <Theme color={colors.indigo}>
    <ColorThemedBlock>Text</ColorThemedBlock>
  </Theme>
));
