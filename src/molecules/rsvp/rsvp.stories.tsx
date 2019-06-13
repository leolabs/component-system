import { storiesOf } from "@storybook/react";
import React, { useState } from "react";

import { lightBlue } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { Rsvp, Response } from "./rsvp";

const SelectableRsvp = () => {
  const [val, setVal] = useState<Response>("yes");

  return <Rsvp value={val} onChange={setVal} />;
};

storiesOf("Molecules / RSVP", module).add("base", () => (
  <Theme color={lightBlue}>
    <SelectableRsvp />
  </Theme>
));
