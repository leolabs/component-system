import { storiesOf } from "@storybook/react";
import React, { useState } from "react";

import { RsvpStatus } from "../..";

import { Rsvp } from "./rsvp";

const SelectableRsvp = () => {
  const [val, setVal] = useState<RsvpStatus | null>(null);

  return <Rsvp value={val} onChange={setVal} />;
};

storiesOf("Molecules / RSVP", module).add("base", () => <SelectableRsvp />);
