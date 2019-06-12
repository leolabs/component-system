import { storiesOf } from "@storybook/react";
import React from "react";

import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Ribbon } from "./ribbon";

storiesOf("Ribbon", module).add("base", () => (
  <Theme color={orange}>
    <div
      style={{
        backgroundColor: "blue",
        width: 200,
        height: 200,
        position: "relative",
      }}
    >
      <Ribbon>Ribbon Text</Ribbon>
    </div>
  </Theme>
));
