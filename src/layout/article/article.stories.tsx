import React from "react";
import { storiesOf } from "@storybook/react";
import { Article } from "./article";
import { EventDetail, FeatherIcon, Typography } from "../..";
import { Calendar } from "react-feather";
import { noMargin } from "../../stories/helpers";

storiesOf("Layout / Article", module)
  .addDecorator(noMargin)
  .add("default", () => (
    <Article marginMult={2}>
      <EventDetail icon={<FeatherIcon icon={Calendar} />} primary="Tuesday, June 12" />
      <Typography className="block" variant="heading-2">
        Article HTML-Tag
      </Typography>
      <Typography variant="body-1">
        {`Das HTML Main Element (<main>) kann als ein Container für den leitenden Inhalt benutzt werden.
      Der Hauptteil besteht aus Inhalt, der direkt bezogen oder auf das zentrale Thema eines Bereichs
      oder der zentralen Funktionalität einer Applikation aufbaut.`}
      </Typography>
    </Article>
  ));
