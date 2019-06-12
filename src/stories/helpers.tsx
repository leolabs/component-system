import React from "react";
import { css } from "linaria";
import { RenderFunction } from "@storybook/react";

const flexer = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumn = (story: RenderFunction) => <div className={flexer}>{story()}</div>;
