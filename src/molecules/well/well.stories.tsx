import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography } from "../../atoms/typography/typography";
import { orange } from "../../theme/colors/colors";

import { Well } from "./well";

storiesOf("Molecules / Well", module)
  .add("primary", () => (
    <Well primary>
      <Typography variant="detail" element="p">
        Well Header
      </Typography>
      <Typography variant="body-2" element="p">
        Long long long well Body lorem ipsum sit dolor amet
      </Typography>
    </Well>
  ))
  .add("primary with color", () => (
    <Well color={orange}>
      <Typography variant="detail" element="p" color={orange[700]}>
        Well Header
      </Typography>
      <Typography variant="body-2" element="p">
        Long long long well Body lorem ipsum sit dolor amet
      </Typography>
    </Well>
  ))
  .add("not primary", () => (
    <Well>
      <Typography variant="detail" element="p">
        Well Header
      </Typography>
      <Typography variant="body-2" element="p">
        Long long long well Body lorem ipsum sit dolor amet
      </Typography>
    </Well>
  ));
