import React, { useState, useCallback } from "react";
import { storiesOf } from "@storybook/react";
import { DatetimePicker } from "./datetime-picker";

const ControlledDateTimePicker = () => {
  const [date, setDate] = useState(new Date(2019, 5, 2, 13, 37));
  const handleDateChange = useCallback(
    ({ value }) => {
      console.log("datetime changed:", value);
      setDate(value);
    },
    [setDate],
  );
  return <DatetimePicker value={date} onDateChange={handleDateChange} />;
};

storiesOf("Atoms / Datetime Picker", module).add("default", () => <ControlledDateTimePicker />);
