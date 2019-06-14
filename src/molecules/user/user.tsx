import { styled } from "linaria/react";
import React from "react";
import { Trash, Share } from "react-feather";

import { UserStatus } from "../..";
import { Avatar } from "../../atoms/avatar/avatar";
import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Typography } from "../../atoms/typography/typography";
import { ListItem } from "../../layout/list/list";
import { neutral } from "../../theme/colors/colors";

/** User metadata of a single user. */
export interface UserData {
  /** The users unique ID. */
  id: string;

  /** Optional. The user's photo / image URL. */
  image?: string | null;

  /** The user's name. */
  name: string;

  /** The user's RSVP state. */
  status: UserStatus;
}

/** Props for the User component. */
export interface UserProps {
  /** The user's metadata. */
  data: UserData;

  /** Called when the user is removed. */
  onDelete?: React.MouseEventHandler;

  /** Called when the users invitation should be shared. */
  onShare?: React.MouseEventHandler;
}

const Base = styled(ListItem)`
  margin: 0.25rem 0;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 1rem;
`;

/**
 * Display the RSVP state and management buttons for a single user.
 *
 * @example
 * <User
 *   data={{
 *     id: "12345",
 *     name: 'Hans Wurst',
 *     status: 'accepted',
 *   }}
 *   onDelete={disinviteUser}
 *   onShare={inviteUser}
 * />
 */
export const User: React.SFC<UserProps> = ({ data, onDelete, onShare }) => (
  <Base>
    <Avatar {...data} />
    <Detail>
      <Typography variant="detail" color={neutral[900]}>
        {data.name}
      </Typography>
      <Typography variant="body-2" color={neutral[400]}>
        {data.status}
      </Typography>
    </Detail>
    <Button noBackground onClick={onDelete}>
      <FeatherIcon icon={Trash} />
    </Button>
    <Button noBackground primary onClick={onShare}>
      <FeatherIcon icon={Share} />
    </Button>
  </Base>
);
