import { storiesOf } from "@storybook/react";
import React from "react";

import { Ribbon } from "./ribbon";

storiesOf("Atoms / Ribbon", module).add("default", () => (
  <div
    style={{
      backgroundColor: "#ccc",
      width: 200,
      height: 200,
      position: "relative",
    }}
  >
    <Ribbon>Ribbon Text</Ribbon>
  </div>
));
