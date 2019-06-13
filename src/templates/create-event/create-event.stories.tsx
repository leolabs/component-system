import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { ContentWrapper } from "../../layout/content-wrapper/content-wrapper";
import { Header } from "../../molecules/header/header";
import { Jumbo } from "../../molecules/jumbo/jumbo";
import { Typography } from "../../atoms/typography/typography";
import { PrimaryInput } from "../../atoms/primary-input/primary-input";
import { Form, FormField } from "../../molecules/form/form";
import { Input } from "../../atoms/input/input";
import { DatetimePicker } from "../../atoms/datetime-picker/datetime-picker";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Clock, Plus, MapPin, Info } from "react-feather";
import { Button } from "../../atoms/button/button";
import { Overlay } from "../../layout/overlay/overlay";
import { Stepper } from "../../molecules/stepper/stepper";

const EndTime: React.SFC = () => {
  const [enabled, setEnabled] = useState(false);
  if (enabled) {
    return (
      <FormField label="End" inline>
        <DatetimePicker />
      </FormField>
    );
  }

  return (
    <FormField inline>
      <Button noBackground onClick={() => setEnabled(true)}>
        <FeatherIcon icon={Plus} />
        <Typography variant="button">Add end time</Typography>
      </Button>
    </FormField>
  );
};

storiesOf("Templates / Create Event", module).add("default", () => (
  <ContentWrapper stepper>
    <Header />
    <Jumbo>
      <Typography variant="heading-2">Event Details</Typography>
      <Typography variant="body-1">Please enter the most important details here</Typography>
    </Jumbo>
    <PrimaryInput placeholder="Add a Title..." />
    <Form>
      <FormField icon={<FeatherIcon icon={Clock} />} label="Start" inline>
        <DatetimePicker />
      </FormField>
      <EndTime />
      <FormField icon={<FeatherIcon icon={MapPin} />} label="Location">
        <Input placeholder="Where will your event take place?" />
      </FormField>
      <FormField icon={<FeatherIcon icon={Info} />} label="About">
        <Input multiline placeholder="What should your guests know?" />
      </FormField>
    </Form>
    <Overlay>
      <Stepper step={1} maxStep={3} />
    </Overlay>
  </ContentWrapper>
));
