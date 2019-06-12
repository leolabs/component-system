import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { styled } from "linaria/react";
import { orange } from "../../theme/colors/colors";
import { Overlay } from "./overlay";

const OverlayContent = styled.div`
  height: 5rem;
  background: ${orange[500]};
`;

storiesOf("Layout / Overlay", module).add("default", () => (
  <Overlay hidden={boolean("Hidden", false)}>
    <OverlayContent />
  </Overlay>
));
