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

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

interface StepperProps {
  step: number;
  maxStep: number;
  onChange?: (step: number) => any;
  onFinish?: () => any;
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
      Step&nbsp;{step} of&nbsp;{maxStep}
    </Typography>
    {step > 1 ? (
      <StyledButton onClick={() => onChange && onChange(step - 1)}>
        <FeatherIcon icon={ChevronLeft} />
      </StyledButton>
    ) : null}
    {step < maxStep ? (
      <StyledButton primary onClick={() => onChange && onChange(step + 1)}>
        <span>Next Step</span>
        <FeatherIcon icon={ChevronRight} />
      </StyledButton>
    ) : null}
    {step === maxStep ? (
      <StyledButton primary onClick={() => onFinish && onFinish()}>
        <FeatherIcon icon={Check} />
        <span>Finish</span>
      </StyledButton>
    ) : null}
  </StyledStepper>
);
