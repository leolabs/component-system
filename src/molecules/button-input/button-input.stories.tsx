import { storiesOf } from "@storybook/react";
import React, { useState } from "react";

import { FeatherIcon } from "../../atoms/icons/icons";
import { CheckCircle } from "react-feather";
import { orange } from "../../theme/colors/colors";
import { Theme } from "../../theme/theme-context/theme-context";

import { ButtonInput } from "./button-input";

const Input = ({ disabled }) => {
  const [value, setValue] = useState("");
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => setValue(ev.target.value);
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setValue("");
  };

  return (
    <ButtonInput
      color={orange}
      disabled={disabled}
      icon={<FeatherIcon icon={CheckCircle} />}
      placeholder="Type something here..."
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

storiesOf("Molecules / Button Input", module)
  .add("default", () => (
    <Theme color={orange}>
      <Input disabled={false} />
    </Theme>
  ))
  .add("disabled", () => (
    <Theme color={orange}>
      <Input disabled={true} />
    </Theme>
  ));
