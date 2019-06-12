import React from "react";
import { css } from "linaria";
import { RenderFunction } from "@storybook/react";

export const flexer = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumn = (story: RenderFunction) => <div className={flexer}>{story()}</div>;
