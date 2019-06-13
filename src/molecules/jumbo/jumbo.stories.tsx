import { storiesOf } from "@storybook/react";
import { css } from "linaria";
import React from "react";

import { Typography } from "../../atoms/typography/typography";
import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Jumbo } from "./jumbo";

const size = css`
  height: 150px;
  width: 300px;
`;

storiesOf("Molecules / Jumbo", module)
  .add("no background", () => (
    <Theme color={orange}>
      <Jumbo className={size}>
        <Typography variant="heading-2">Jumbo Header</Typography>
        <Typography variant="body-1">Jumbo Body</Typography>
      </Jumbo>
    </Theme>
  ))
  .add("with background", () => (
    <Theme color={orange}>
      <Jumbo background="https://source.unsplash.com/zGzXsJUBQfs/512x256" className={size}>
        <Typography variant="heading-jumbo">Jumbo Header</Typography>
      </Jumbo>
    </Theme>
  ));
