import { storiesOf } from "@storybook/react";
import React from "react";

import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Avatar, Status } from "./avatar";

storiesOf("Avatar", module)
  .add("with image", () => (
    <Theme color={orange}>
      {["not-sent", "sent", "accepted", "maybe", "declined"].map((status: Status) => (
        <Avatar
          name="Frank Underwood"
          image="https://source.unsplash.com/iFgRcqHznqg/100x100"
          status={status}
        />
      ))}
    </Theme>
  ))
  .add("without image", () => (
    <Theme color={orange}>
      {["not-sent", "sent", "accepted", "maybe", "declined"].map((status: Status) => (
        <Avatar name="Frank Underwood" status={status} />
      ))}
    </Theme>
  ));
