import React, { useEffect } from "react";
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

const StyleApplier: React.FC<{ styleClass: string }> = ({ styleClass, children }) => {
  useEffect(() => {
    document.body.classList.add(styleClass);
    return () => document.body.classList.remove(styleClass);
  });

  return <>{children}</>;
};

const applyStyle = (styleClass: string) => {
  const ApplyStyle = (story: RenderFunction) => {
    return <StyleApplier styleClass={styleClass}>{story()}</StyleApplier>;
  };

  return ApplyStyle;
};

const bodyMarginStyles = css`
  margin: 0rem;
`;

const flexColumnStyles = css`
  #root div > div[style] {
    display: flex;
    flex-direction: column;
  }
`;

const flexSpaceStyles = css`
  #root div > div[style] {
    display: flex;
    flex-direction: column;

    > * {
      margin: 0 1rem 1rem 0;
    }
  }
`;

export const noMargin = applyStyle(bodyMarginStyles);
export const flexColumn = applyStyle(flexColumnStyles);
export const flexSpace = applyStyle(flexSpaceStyles);
