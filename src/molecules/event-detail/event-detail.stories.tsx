import { storiesOf } from "@storybook/react";
import React from "react";

import { FeatherIcon } from "../../atoms/icons/icons";
import { Clock } from "react-feather";

import { EventDetail } from "./event-detail";

storiesOf("Molecules / Event Detail", module)
  .add("two rows", () => (
    <EventDetail
      icon={<FeatherIcon icon={Clock} />}
      primary="Primary Text"
      secondary="Secondary Text"
    />
  ))
  .add("one row", () => <EventDetail icon={<FeatherIcon icon={Clock} />} primary="Primary Text" />);
