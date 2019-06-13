import { storiesOf } from "@storybook/react";
import React from "react";

import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Header } from "./header";

storiesOf("Molecules / Header", module).add("default", () => (
  <Theme color={orange}>
    <Header />
  </Theme>
));
