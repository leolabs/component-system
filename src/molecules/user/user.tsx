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

export interface UserData {
  id: string;
  image?: string | null;
  name: string;
  status: UserStatus;
}

export interface UserProps {
  data: UserData;
  onDelete?: React.MouseEventHandler;
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
