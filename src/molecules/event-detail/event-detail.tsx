import { styled } from "linaria/react";
import React from "react";

import { Typography } from "../../atoms/typography/typography";
import { neutral } from "../../theme/colors/colors";

/** Props for event detail. */
export interface EventDetailProps {
  /** The target color of the top line. */
  color?: string;

  /** The icon to show next to the two lines. */
  icon: React.ReactNode;

  /**
   * The contents of the top line.
   *
   * Automatically formatted using Typography.
   */
  primary: React.ReactNode;

  /**
   * Optional. The contents of the bottom line.
   *
   * Automatically formatted using Typography.
   */
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

/**
 * A 2-line event detail indicator with an icon.
 */
export const EventDetail: React.FC<EventDetailProps> = ({ color, icon, primary, secondary }) => (
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
