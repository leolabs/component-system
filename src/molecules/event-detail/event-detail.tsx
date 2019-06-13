import { styled } from "linaria/react";
import React from "react";

import { Typography } from "../../atoms/typography/typography";

export interface EventDetailProps {
  color?: string;
  icon: React.ReactNode;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

const CenteredRow = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
`;

const StartRow = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 1.2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.5rem;
`;

export const EventDetail: React.FC<EventDetailProps> = ({ color, icon, primary, secondary }) => {
  const inner = (
    <>
      {icon}

      <Column>
        <Typography color={color} variant="detail">
          {primary}
        </Typography>
        {secondary && <Typography variant="body-2">{secondary}</Typography>}
      </Column>
    </>
  );

  return primary && secondary ? <StartRow>{inner}</StartRow> : <CenteredRow>{inner}</CenteredRow>;
};
