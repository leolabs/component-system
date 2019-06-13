import React from "react";
import { storiesOf } from "@storybook/react";
import { FormField } from "./form-field";
import { Input } from "../../atoms/input/input";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Info, User } from "react-feather";
import { text } from "@storybook/addon-knobs";

storiesOf("Molecules / Form Field", module)
  .add("default", () => (
    <FormField label={text("label", "Dein Name")} icon={<FeatherIcon icon={Info} />}>
      <Input />
    </FormField>
  ))
  .add("inline", () => (
    <FormField label={text("label", "Dein Name")} icon={<FeatherIcon icon={Info} />} inline>
      <Input />
    </FormField>
  ))
  .add("multiple", () => (
    <>
      <FormField label="First name" icon={<FeatherIcon icon={User} />} inline>
        <Input placeholder="Your first name" />
      </FormField>
      <FormField label="Last name" inline>
        <Input placeholder="Your last name" />
      </FormField>
      <FormField label="About" icon={<FeatherIcon icon={Info} />}>
        <Input multiline placeholder="Write something..." />
      </FormField>
    </>
  ));
