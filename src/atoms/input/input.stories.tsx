import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./input";
import { flexColumn } from "../../stories/helpers";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Atoms / Input", module)
  .addDecorator(flexColumn)
  .add("default", () => <Input placeholder={text("placeholder", "Your name")} />)
  .add("multiline", () => (
    <Input placeholder={text("placeholder", "About you")} rows={number("Rows", 10)} multiline />
  ))
  .add("form", () => (
    <>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
    </>
  ));
