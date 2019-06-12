import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";
import { Input } from "../input/input";
import { flexer } from "../../stories/helpers";
import { text } from "@storybook/addon-knobs";

storiesOf("Atoms / Button", module)
  .add("default", () => <Button>{text("content", "Click me!")}</Button>)
  .add("primary", () => <Button primary>{text("content", "Click me!")}</Button>)
  .add("form", () => (
    <div className={flexer}>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button primary>Login / Register</Button>
    </div>
  ));
