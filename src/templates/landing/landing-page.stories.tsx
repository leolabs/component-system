import { storiesOf } from "@storybook/react";
import React from "react";

import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { LandingPage } from "./landing-page";

storiesOf("Templates / Landing Page", module)
  .add("no background", () => (
    <Theme color={orange}>
      <LandingPage />
    </Theme>
  ));
