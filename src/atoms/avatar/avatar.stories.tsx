import { storiesOf } from "@storybook/react";
import React from "react";

import { Avatar, Status } from "./avatar";

storiesOf("Atoms / Avatar", module)
  .add("with image", () =>
    ["not-sent", "sent", "accepted", "maybe", "declined"].map((status: Status) => (
      <Avatar
        name="Frank Underwood"
        image="https://source.unsplash.com/iFgRcqHznqg/100x100"
        status={status}
      />
    )),
  )
  .add("without image", () =>
    ["not-sent", "sent", "accepted", "maybe", "declined"].map((status: Status) => (
      <Avatar name="Frank Underwood" status={status} />
    )),
  );
