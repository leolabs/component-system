import { storiesOf } from "@storybook/react";
import React from "react";

import { Icons } from "../../atoms/icons/icons";
import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { EventDetail } from "./event-detail";

storiesOf("Molecules / Event Detail", module)
  .add("with both", () => (
    <Theme color={orange}>
      <EventDetail icon={Icons.Clock} primary="Primary Text" secondary="Secondary Text" />
    </Theme>
  ))
  .add("just top", () => (
    <Theme color={orange}>
      <EventDetail icon={Icons.Clock} primary="Primary Text" />
    </Theme>
  ));
