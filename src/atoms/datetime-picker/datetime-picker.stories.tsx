import React, { useState, useCallback } from "react";
import { storiesOf } from "@storybook/react";
import { DatetimePicker } from "./datetime-picker";
import { action } from "@storybook/addon-actions";
import { FormField } from "../../molecules/form/form";
import { FeatherIcon } from "../icons/icons";
import { Clock } from "react-feather";

const UncontrolledDateTimePicker = props => {
  const [date, setDate] = useState(new Date(2019, 5, 2, 13, 37));
  const handleDateChange = useCallback(
    ({ value }) => {
      setDate(value);
      action("datetime-changed")({ value });
    },
    [setDate],
  );
  return <DatetimePicker {...props} value={date} onDateChange={handleDateChange} />;
};

storiesOf("Atoms / Datetime Picker", module)
  .add("default", () => <UncontrolledDateTimePicker />)
  .add("In Form Field", () => (
    <FormField label="Start" icon={<FeatherIcon icon={Clock} />} inline>
      <UncontrolledDateTimePicker />
    </FormField>
  ));
