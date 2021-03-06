import { storiesOf } from "@storybook/react";
import React, { useState } from "react";

import { FeatherIcon } from "../../atoms/icons/icons";
import { CheckCircle } from "react-feather";
import { orange } from "../../theme/colors/colors";

import { ButtonInput } from "./button-input";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const Input = ({ disabled }) => {
  const [value, setValue] = useState("");
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => setValue(ev.target.value);
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setValue("");
    action("submit")(ev);
  };

  return (
    <ButtonInput
      color={orange}
      disabled={disabled}
      icon={<FeatherIcon icon={CheckCircle} />}
      placeholder={text("placeholder", "Type something here...")}
      value={value}
      canSubmit={value !== ""}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

storiesOf("Molecules / Button Input", module)
  .add("default", () => <Input disabled={false} />)
  .add("disabled", () => <Input disabled={true} />);
