import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import React, { useState } from "react";

import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";
import { Overlay } from "../../layout/overlay/overlay";

import { Stepper } from "./stepper";
import { styled } from "linaria/react";

const StyledTheme = styled(Theme)`
  width: 100%;
  max-width: 375px;
  display: flex;
`;

const ControlledStepper: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <Stepper
      step={step}
      maxStep={number("Max steps", 4)}
      onChange={step => {
        setStep(step);
        action("Stepped")(step);
      }}
      onFinish={action("Finish clicked")}
    />
  );
};

storiesOf("Molecules / Stepper", module)
  .add("default", () => (
    <StyledTheme color={orange}>
      <Stepper
        step={number("Step", 1)}
        maxStep={number("Maximum Step", 4)}
        onChange={action("Stepped")}
        onFinish={action("Finish clicked")}
      />
    </StyledTheme>
  ))
  .add("controlled", () => (
    <StyledTheme color={orange}>
      <ControlledStepper />
    </StyledTheme>
  ))
  .add("in overlay", () => (
    <Overlay>
      <ControlledStepper />
    </Overlay>
  ));
