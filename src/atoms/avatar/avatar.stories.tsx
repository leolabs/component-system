import { storiesOf } from "@storybook/react";
import React from "react";

import { UserStatus } from "../..";
import { flexSpace } from "../../stories/helpers";

import { Avatar } from "./avatar";

const users: ({ name: string; status: UserStatus })[] = [
  { name: "Grant Andra", status: "not-sent" },
  { name: "Darrel Harold", status: "sent" },
  { name: "Cassandra Rosalind", status: "accepted" },
  { name: "Fabian Taylor", status: "maybe" },
  { name: "Hayes Otis", status: "declined" },
];

storiesOf("Atoms / Avatar", module)
  .addDecorator(flexSpace)
  .add("with image", () =>
    users.map((user, i) => (
      <Avatar
        key={i}
        name={user.name}
        image="https://source.unsplash.com/iFgRcqHznqg/100x100"
        status={user.status}
      />
    )),
  )
  .add("without image", () =>
    users.map((user, i) => <Avatar key={i} name={user.name} status={user.status} />),
  );
