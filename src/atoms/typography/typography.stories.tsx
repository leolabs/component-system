import { storiesOf } from "@storybook/react";
import React from "react";

import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Typography, Variant } from "./typography";

storiesOf("Atoms / Typography", module).add("variants", () => (
  <Theme color={orange}>
    {[
      "body-1",
      "body-2",
      "button",
      "detail",
      "form-label",
      "heading-1",
      "heading-2",
      "status",
      "title",
    ].map((variant: Variant) => (
      <div style={{ marginBottom: 16 }}>
        <Typography variant={variant}>{variant}</Typography>
      </div>
    ))}
  </Theme>
));
