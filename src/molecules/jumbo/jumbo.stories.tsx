import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography } from "../../atoms/typography/typography";

import { Jumbo } from "./jumbo";
import { Ribbon } from "../../atoms/ribbon/ribbon";
import { ResponsiveAspect } from "../../layout/responsive-aspect/responsive-aspect";

storiesOf("Molecules / Jumbo", module)
  .add("no background", () => (
    <Jumbo>
      <Typography variant="heading-2">Jumbo Header</Typography>
      <Typography variant="body-1">Jumbo Body</Typography>
    </Jumbo>
  ))
  .add("with background", () => (
    <Jumbo background="https://source.unsplash.com/zGzXsJUBQfs/512x256">
      <Typography variant="heading-jumbo">Jumbo Header</Typography>
    </Jumbo>
  ))
  .add("with ribbon", () => (
    <ResponsiveAspect ratio={0.5}>
      <Jumbo background="https://source.unsplash.com/zGzXsJUBQfs/512x256">
        <Ribbon>Preview</Ribbon>
        <Typography variant="heading-jumbo">Jumbo Header</Typography>
      </Jumbo>
    </ResponsiveAspect>
  ));
