import React from "react";
import { storiesOf } from "@storybook/react";
import { User, UserData } from "./user";
import { List } from "../../layout/list/list";
import { action } from "@storybook/addon-actions";

const users: UserData[] = [
  {
    id: "mp",
    name: "Martha Johnson",
    status: "declined",
  },
  {
    id: "al",
    name: "Ada Lovelace",
    status: "accepted",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ada_Lovelace_Chalon_portrait.jpg/240px-Ada_Lovelace_Chalon_portrait.jpg",
  },
  {
    id: "jd",
    name: "John Doe",
    status: "not-sent",
  },
];

storiesOf("Molecules / User", module)
  .add("default", () => (
    <User
      data={{
        id: "jd",
        name: "John Doe",
        status: "sent",
      }}
      onDelete={action("delete")}
      onShare={action("share")}
    />
  ))
  .add("multiple", () => (
    <List>
      {users.map((user: UserData, i) => (
        <User
          key={i}
          data={user}
          onDelete={action("delete").bind(null, user)}
          onShare={action("share").bind(null, user)}
        />
      ))}
    </List>
  ));
