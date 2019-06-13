import React from "react";
import { storiesOf } from "@storybook/react";
import { List, ListItem } from "./list";

storiesOf("Layout / List", module).add("default", () => (
  <List>
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
    <ListItem>List Item 4</ListItem>
  </List>
));
