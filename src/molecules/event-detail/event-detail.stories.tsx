import { storiesOf } from "@storybook/react";
import React from "react";

import { FeatherIcon } from "../../atoms/icons/icons";
import { Clock } from "react-feather";
import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { EventDetail } from "./event-detail";

storiesOf("Molecules / Event Detail", module)
  .add("two rows", () => (
    <Theme color={orange}>
      <EventDetail
        icon={<FeatherIcon icon={Clock} />}
        primary="Primary Text"
        secondary="Secondary Text"
      />
    </Theme>
  ))
  .add("one row", () => (
    <Theme color={orange}>
      <EventDetail icon={<FeatherIcon icon={Clock} />} primary="Primary Text" />
    </Theme>
  ));
