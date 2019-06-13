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
      <FormField label="Vorname" icon={<FeatherIcon icon={User} />} inline>
        <Input />
      </FormField>
      <FormField label="Nachname" inline>
        <Input />
      </FormField>
      <FormField label="About" icon={<FeatherIcon icon={Info} />}>
        <Input multiline />
      </FormField>
    </>
  ));
