import { styled } from "linaria/react";
import React from "react";

import { Typography } from "../../atoms/typography/typography";
import { neutral } from "../../theme/colors/colors";

export interface EventDetailProps {
  color?: string;
  icon: React.ReactNode;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

const Base = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 1.2rem;
  color: ${neutral[200]};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.75rem;
  padding-top: 0.125rem;
`;

export const EventDetail: React.FC<EventDetailProps> = ({ color, icon, primary, secondary }) => {
  return (
    <Base>
      {icon}

      <Column>
        <Typography color={color} variant="detail">
          {primary}
        </Typography>
        {secondary && <Typography variant="body-2">{secondary}</Typography>}
      </Column>
    </Base>
  );
};
