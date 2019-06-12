import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";
import { Input } from "../input/input";
import { flexer } from "../../stories/helpers";
import { text } from "@storybook/addon-knobs";
import { Icons } from "../icons/icons";
import { Typography } from "../typography/typography";

storiesOf("Atoms / Button", module)
  .add("default", () => <Button>{text("content", "Click me!")}</Button>)
  .add("primary", () => <Button primary>{text("content", "Click me!")}</Button>)
  .add("custom color", () => (
    <>
      <Button color="green">
        <Typography variant="button">{text("content", "Click me!")}</Typography>
      </Button>
      <Button color="yellow">
        <Typography variant="button">{text("content", "Click me!")}</Typography>
      </Button>
    </>
  ))
  .add("with icon", () => (
    <>
      <Button primary>
        <Icons.ChevronRight />
        <Typography variant="button">{text("content", "Next")}</Typography>
      </Button>
      <Button primary>
        <Typography variant="button">{text("content", "Next")}</Typography>
        <Icons.ChevronRight />
      </Button>
      <Button primary>
        <Typography variant="button">{text("content", "Next")}</Typography>
        <Icons.ChevronRight />
        <Typography variant="button">More text</Typography>
      </Button>
    </>
  ))
  .add("form", () => (
    <div className={flexer}>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button primary>Login / Register</Button>
    </div>
  ));
