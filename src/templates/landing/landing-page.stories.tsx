import { storiesOf } from "@storybook/react";
import React from "react";

import { LandingPage } from "./landing-page";
import { noMargin } from "../../stories/helpers";

storiesOf("Templates / Landing Page", module)
  .addDecorator(noMargin)
  .add("default", () => <LandingPage />);
