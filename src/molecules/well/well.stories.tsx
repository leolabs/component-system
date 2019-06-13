import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography } from "../../atoms/typography/typography";
import { lightBlue, orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Well } from "./well";

storiesOf("Molecules / Well", module)
  .add("primary", () => (
    <Theme color={lightBlue}>
      <Well primary>
        <Typography variant="detail" element="p">
          Well Header
        </Typography>
        <Typography variant="body-2" element="p">
          Long long long well Body lorem ipsum sit dolor amet
        </Typography>
      </Well>
    </Theme>
  ))
  .add("primary with color", () => (
    <Theme color={lightBlue}>
      <Well color={orange}>
        <Typography variant="detail" element="p" color={orange[700]}>
          Well Header
        </Typography>
        <Typography variant="body-2" element="p">
          Long long long well Body lorem ipsum sit dolor amet
        </Typography>
      </Well>
    </Theme>
  ))
  .add("not primary", () => (
    <Theme color={lightBlue}>
      <Well>
        <Typography variant="detail" element="p">
          Well Header
        </Typography>
        <Typography variant="body-2" element="p">
          Long long long well Body lorem ipsum sit dolor amet
        </Typography>
      </Well>
    </Theme>
  ));
