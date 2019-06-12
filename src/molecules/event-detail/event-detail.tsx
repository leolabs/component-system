import { styled } from "linaria/react";
import React from "react";
import { Props } from "react-feather";

import { Typography } from "../../atoms/typography/typography";

export interface EventDetailProps {
  color?: string;
  icon: React.ComponentType<Props>;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

const Row = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.5rem;
`;

export const EventDetail: React.FC<EventDetailProps> = ({
  color,
  icon: Icon,
  primary,
  secondary,
}) => (
  <Row>
    <Icon />

    <Column>
      <Typography color={color} variant="detail">
        {primary}
      </Typography>
      {secondary && <Typography variant="body-2">{secondary}</Typography>}
    </Column>
  </Row>
);
