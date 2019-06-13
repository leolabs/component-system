import React from "react";
import { Status, Avatar } from "../../atoms/avatar/avatar";
import { styled } from "linaria/react";
import { Typography } from "../../atoms/typography/typography";
import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Trash, Share } from "react-feather";
import { ListItem } from "../../layout/list/list";

export interface UserData {
  id: string;
  image?: string | null;
  name: string;
  status: Status;
}

export interface UserProps {
  data: UserData;
  onDelete?: (ev: React.MouseEvent) => void;
  onShare?: (ev: React.MouseEvent) => void;
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

export const User: React.SFC<UserProps> = ({ data, onDelete, onShare }) => {
  return (
    <Base>
      <Avatar {...data} />
      <Detail>
        <Typography variant="detail">{data.name}</Typography>
        <Typography variant="body-2">{data.status}</Typography>
      </Detail>
      <Button noBackground onClick={onDelete}>
        <FeatherIcon icon={Trash} />
      </Button>
      <Button noBackground primary onClick={onShare}>
        <FeatherIcon icon={Share} />
      </Button>
    </Base>
  );
};
