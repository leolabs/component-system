import { storiesOf } from "@storybook/react";
import React, { useState } from "react";

import { Rsvp, Response } from "./rsvp";

const SelectableRsvp = () => {
  const [val, setVal] = useState<Response | null>(null);

  return <Rsvp value={val} onChange={setVal} />;
};

storiesOf("Molecules / RSVP", module).add("base", () => <SelectableRsvp />);
