import React from "react";
import { Button } from "../../atoms/button/button";
import { Typography } from "../../atoms/typography/typography";
import { FeatherIcon } from "../../atoms/icons/icons";
import { styled } from "linaria/react";
import { ChevronLeft, ChevronRight, Check } from "react-feather";

const StyledStepper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  height: 4rem;
  padding: 0 1rem;

  > :first-child {
    margin-right: auto;
  }
`;

const Btn = styled(Button)`
  margin-left: 1rem;
`;

interface StepperProps {
  step: number;
  maxStep: number;
  onChange: (step: number) => any;
  onFinish: () => any;
}

export const Stepper: React.FC<StepperProps & Omit<React.ComponentProps<"div">, "onChange">> = ({
  step,
  maxStep,
  onChange,
  onFinish,
  ...props
}) => (
  <StyledStepper {...props}>
    <Typography variant="status">
      Step {step} of {maxStep}
    </Typography>
    {step > 1 ? (
      <Btn onClick={() => onChange(step - 1)}>
        <FeatherIcon icon={ChevronLeft} />
      </Btn>
    ) : null}
    {step < maxStep ? (
      <Btn primary onClick={() => onChange(step + 1)}>
        <Typography variant="button">Next Step</Typography>
        <FeatherIcon icon={ChevronRight} />
      </Btn>
    ) : null}
    {step === maxStep ? (
      <Btn primary onClick={() => onFinish()}>
        <FeatherIcon icon={Check} />
        <Typography variant="button">Finish</Typography>
      </Btn>
    ) : null}
  </StyledStepper>
);
