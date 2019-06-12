import { storiesOf } from "@storybook/react";
import React from "react";

import { PrimaryInput } from "./primary-input";
import { flexColumn } from "../../stories/helpers";

storiesOf("Atoms / Primary Input", module)
  .addDecorator(flexColumn)
  .add("base", () => <PrimaryInput placeholder="Placeholder" />);
