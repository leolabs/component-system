import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography, Variant } from "./typography";

storiesOf("Atoms / Typography", module).add("variants", () =>
  [
    "body-1",
    "body-2",
    "button",
    "detail",
    "label",
    "heading-1",
    "heading-2",
    "heading-jumbo",
    "status",
    "title",
  ].map((variant: Variant) => (
    <div style={{ marginBottom: 16 }}>
      <Typography variant={variant}>{variant}</Typography>
    </div>
  )),
);
