import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";
import { Input } from "../input/input";
import { text } from "@storybook/addon-knobs";
import { FeatherIcon } from "../icons/icons";
import { ChevronRight, ChevronLeft } from "react-feather";
import { green, yellow } from "../../theme/colors/colors";
import { Form } from "../../molecules/form/form";

storiesOf("Atoms / Button", module)
  .add("default", () => <Button>{text("content", "Click me!")}</Button>)
  .add("primary", () => <Button primary>{text("content", "Click me!")}</Button>)
  .add("disabled", () => <Button disabled>{text("content", "Click me!")}</Button>)
  .add("custom color", () => (
    <>
      <Button color={green}>{text("content", "Click me!")}</Button>
      <Button color={yellow}>{text("content", "Click me!")}</Button>
    </>
  ))
  .add("with icon", () => (
    <>
      <Button primary>
        <FeatherIcon icon={ChevronRight} />
        <span>{text("content", "Next")}</span>
      </Button>
      <Button primary>
        <span>{text("content", "Next")}</span>
        <FeatherIcon icon={ChevronRight} />
      </Button>
      <Button primary>
        <span>{text("content", "Next")}</span>
        <FeatherIcon icon={ChevronRight} />
        <span>More text</span>
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
    <Form>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button primary>Login / Register</Button>
    </Form>
  ));
