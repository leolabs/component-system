import React from "react";
import { css } from "linaria";
import { select } from "@storybook/addon-knobs";
import { RenderFunction } from "@storybook/react";
import {
  cyan,
  green,
  indigo,
  lightBlue,
  orange,
  red,
  yellow,
  yellowVivid,
} from "../theme/colors/colors";
import { Theme } from "../theme/theme-context/theme-context";

export const flexer = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumn = (story: RenderFunction) => <div className={flexer}>{story()}</div>;

export const themeDecorator = (story: RenderFunction) => (
  <Theme
    color={
      select(
        "Theme Color",
        {
          none: null,
          orange,
          indigo,
          red,
          yellow,
          yellowVivid,
          green,
          lightBlue,
          cyan,
        },
        null,
      ) || undefined
    }
  >
    {story()}
  </Theme>
);
