import { styled } from "linaria/react";
import React, { useCallback } from "react";

import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { green, yellow, red } from "../../theme/colors/colors";
import { CheckCircle, XCircle, HelpCircle } from "react-feather";

/** Props for the RSVP component. */
export interface RsvpProps {
  /** Fired when the response value changes. */
  onChange?: (newValue: Response) => void;

  /** The response value. Pass `null` for unselected. */
  value?: Response | null;
}

/** The RSVP response. */
export type Response = "yes" | "no" | "maybe";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  margin-top: 1rem;
`;

/** An RSVP chooser with three buttons. */
export const Rsvp: React.SFC<RsvpProps> = ({ onChange, value }) => {
  const handleYesClicked = useCallback(() => onChange && onChange("yes"), [onChange]);
  const handleMaybeClicked = useCallback(() => onChange && onChange("maybe"), [onChange]);
  const handleNoClicked = useCallback(() => onChange && onChange("no"), [onChange]);

  return (
    <Wrapper>
      <Button color={green} onClick={handleYesClicked} selected={value === "yes"}>
        <FeatherIcon icon={CheckCircle} />
        <span>Yes</span>
      </Button>

      <Bottom>
        <Button color={yellow} onClick={handleMaybeClicked} selected={value === "maybe"}>
          <FeatherIcon icon={HelpCircle} />
          <span>Maybe</span>
        </Button>
        <Button color={red} onClick={handleNoClicked} selected={value === "no"}>
          <FeatherIcon icon={XCircle} />
          <span>No</span>
        </Button>
      </Bottom>
    </Wrapper>
  );
};
