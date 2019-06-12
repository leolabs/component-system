import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";
import { Input } from "../input/input";
import { flexer } from "../../stories/helpers";
import { text } from "@storybook/addon-knobs";
import { FeatherIcon } from "../icons/icons";
import { ChevronRight, ChevronLeft } from "react-feather";
import { Typography } from "../typography/typography";
import { green, yellow } from "../../theme/colors/colors";

storiesOf("Atoms / Button", module)
  .add("default", () => <Button>{text("content", "Click me!")}</Button>)
  .add("primary", () => <Button primary>{text("content", "Click me!")}</Button>)
  .add("disabled", () => <Button disabled>{text("content", "Click me!")}</Button>)
  .add("custom color", () => (
    <>
      <Button color={green}>
        <Typography variant="button">{text("content", "Click me!")}</Typography>
      </Button>
      <Button color={yellow}>
        <Typography variant="button">{text("content", "Click me!")}</Typography>
      </Button>
    </>
  ))
  .add("with icon", () => (
    <>
      <Button primary>
        <FeatherIcon icon={ChevronRight} />
        <Typography variant="button">{text("content", "Next")}</Typography>
      </Button>
      <Button primary>
        <Typography variant="button">{text("content", "Next")}</Typography>
        <FeatherIcon icon={ChevronRight} />
      </Button>
      <Button primary>
        <Typography variant="button">{text("content", "Next")}</Typography>
        <FeatherIcon icon={ChevronRight} />
        <Typography variant="button">More text</Typography>
      </Button>
    </>
  ))
  .add("icon only", () => (
    <>
      <Button>
        <FeatherIcon icon={ChevronLeft} />
      </Button>
      <Button primary>
        <FeatherIcon icon={ChevronRight} />
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
