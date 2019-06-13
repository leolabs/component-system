import { styled } from "linaria/react";
import React, { useCallback } from "react";

import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Typography } from "../../atoms/typography/typography";
import { green, yellow, red } from "../../theme/colors/colors";
import { CheckCircle, XCircle, HelpCircle } from "react-feather";

export interface RsvpProps {
  onChange?: (newValue: Response) => void;
  value: Response;
}

export type Response = "yes" | "no" | "maybe";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const Rsvp: React.SFC<RsvpProps> = ({ onChange, value }) => {
  const handleYesClicked = useCallback(() => onChange && onChange("yes"), [onChange]);
  const handleMaybeClicked = useCallback(() => onChange && onChange("maybe"), [onChange]);
  const handleNoClicked = useCallback(() => onChange && onChange("no"), [onChange]);

  return (
    <Wrapper>
      <Button color={green} onClick={handleYesClicked} selected={value === "yes"}>
        <FeatherIcon icon={CheckCircle} />
        <Typography variant="button">Yes</Typography>
      </Button>

      <Bottom>
        <Button color={yellow} onClick={handleMaybeClicked} selected={value === "maybe"}>
          <FeatherIcon icon={HelpCircle} />
          <Typography variant="button">Maybe</Typography>
        </Button>
        <Button color={red} onClick={handleNoClicked} selected={value === "no"}>
          <FeatherIcon icon={XCircle} />
          <Typography variant="button">No</Typography>
        </Button>
      </Bottom>
    </Wrapper>
  );
};
