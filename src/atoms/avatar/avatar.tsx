import React from "react";
import { styled } from "linaria/react";

import { UserStatus } from "../..";
import { neutral } from "../../theme/colors/colors";

/** Avatar component props. */
export interface AvatarProps {
  /**
   * An image of the user. If not set, the component will show the user's initials.
   */
  image?: string | null;

  /**
   * The user's name. Used for the alt on the background image tag and showing the
   * user's initials, if needed.
   */
  name: string;

  /** The user's RSVP state. */
  status: UserStatus;
}

const backgrounds = ["#98AEEB", "#F191C1", "#F29B9B", "#A3D9A5", "#F8E3A3"];

const generateBackground = (input: string) =>
  backgrounds[
    input.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0) % backgrounds.length
  ];

const generateInitials = (input: string) =>
  input
    .split(" ")
    .map(w => w.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

const statusColors = {
  "not-sent": "#9AA5B1",
  sent: "#0B4F71",
  accepted: "#94C843",
  maybe: "#F7C948",
  declined: "#CF1124",
};

const Wrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
`;

const Image = styled.img`
  background-color: ${neutral[100]};
  border-radius: 1.25rem;

  display: block;
  position: absolute;

  height: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
`;

const Svg = styled.svg`
  display: block;
  width: 2.5rem;

  position: absolute;
`;

/**
 * A user avatar icon with an RSVP status indicator.
 */
export const Avatar: React.FC<AvatarProps> = ({ image, name, status }) => (
  <Wrapper>
    {image ? (
      <Image src={image} alt={name} />
    ) : (
      <Svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill={generateBackground(name)} />
        <text
          x="20"
          y="19"
          fill="white"
          fontSize="18"
          textAnchor="middle"
          alignmentBaseline="central"
        >
          {generateInitials(name)}
        </text>
      </Svg>
    )}

    <Svg viewBox="0 0 40 40">
      <circle cx="34" cy="34" r="6" stroke="white" strokeWidth="1" fill={statusColors[status]} />
    </Svg>
  </Wrapper>
);
