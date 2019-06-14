import React from "react";
import { storiesOf } from "@storybook/react";
import { ContentWrapper } from "../../layout/content-wrapper/content-wrapper";
import { Header } from "../../molecules/header/header";
import { Jumbo } from "../../molecules/jumbo/jumbo";
import { noMargin } from "../../stories/helpers";
import { Stepper } from "../../molecules/stepper/stepper";
import { Typography } from "../../atoms/typography/typography";
import { Overlay } from "../../layout/overlay/overlay";
import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Share, Plus } from "react-feather";
import { neutral } from "../../theme/colors/colors";
import { action } from "@storybook/addon-actions";
import { ButtonInput } from "../../molecules/button-input/button-input";
import { Form } from "../../molecules/form/form";
import { List } from "../../layout/list/list";
import { UserData, User } from "../../molecules/user/user";

const users: UserData[] = [
  {
    id: "mp",
    name: "Martha Johnson",
    status: "declined",
  },
  {
    id: "al",
    name: "Ada Lovelace",
    status: "accepted",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ada_Lovelace_Chalon_portrait.jpg/240px-Ada_Lovelace_Chalon_portrait.jpg",
  },
  {
    id: "jd",
    name: "John Doe",
    status: "not-sent",
  },
];

storiesOf("Templates / Share", module)
  .addDecorator(noMargin)
  .add("share", () => (
    <>
      <Header />
      <ContentWrapper stepper>
        <Jumbo>
          <Typography variant="heading-2">Share Your Event</Typography>
          <Typography variant="body-1">
            We have created your event. Share it with your friends using the link below or invite
            individual friends.
          </Typography>
        </Jumbo>
        <Jumbo backgroundColor={neutral[50]}>
          <Button primary onClick={action("Sharing clicked")}>
            <FeatherIcon icon={Share} />
            <Typography variant="button">Share this event</Typography>
          </Button>
        </Jumbo>
        <Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <ButtonInput
            placeholder="Add a guest"
            icon={<FeatherIcon icon={Plus} />}
            canSubmit
            onSubmit={action("User submitted")}
          />
          <List>
            {users.map((user: UserData, i) => (
              <User
                key={i}
                data={user}
                onDelete={action("delete").bind(null, user)}
                onShare={action("share").bind(null, user)}
              />
            ))}
          </List>
        </Form>
      </ContentWrapper>
      <Overlay>
        <Stepper step={3} maxStep={3} />
      </Overlay>
    </>
  ));
