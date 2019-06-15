import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";
import React, { useState, useCallback } from "react";

import { Button } from "../../atoms/button/button";
import { CompanyIcon } from "../../atoms/icons/icons";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import { ContentWrapper } from "../../layout/content-wrapper/content-wrapper";
import { Form } from "../../molecules/form/form";
import { Header } from "../../molecules/header/header";
import { Jumbo } from "../../molecules/jumbo/jumbo";
import { noMargin } from "../../stories/helpers";
import { indigo } from "../../theme/colors/colors";

import Apple from "./apple.svg";
import Google from "./google.svg";

export interface RegisterLoginProps {
  onSignInWithApple?: React.MouseEventHandler;
  onSignInWithGoogle?: React.MouseEventHandler;
  onRegisterWithEmail?: (email: string) => void;
}

const LoginButton = styled(Button)`
  display: flex;
  align-items: center;

  > span {
    flex-grow: 1;
  }
`;

const DividerOr = styled(Typography)`
  text-align: center;
`;

export const RegisterLogin: React.FC<RegisterLoginProps> = ({
  onSignInWithApple,
  onSignInWithGoogle,
  onRegisterWithEmail,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChanged = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value),
    [setEmail],
  );
  const handleSubmit = useCallback(
    (ev: React.FormEvent) => {
      ev.preventDefault();

      if (!onRegisterWithEmail) {
        return;
      }

      onRegisterWithEmail(email);
    },
    [onRegisterWithEmail, email],
  );

  return (
    <ContentWrapper>
      <Header />

      <Jumbo>
        <Typography variant="heading-2">Start using Wevent</Typography>
        <Typography variant="body-1">Sign in or register and manage your next event</Typography>
      </Jumbo>

      <Form onSubmit={handleSubmit}>
        <LoginButton color={indigo} onClick={onSignInWithApple} type="button">
          <CompanyIcon src={Apple} />
          <span>Sign in with Apple</span>
        </LoginButton>
        <LoginButton color={indigo} onClick={onSignInWithGoogle} type="button">
          <CompanyIcon src={Google} />
          <span>Sign in with Google</span>
        </LoginButton>

        <DividerOr variant="body-1">or</DividerOr>

        <Input placeholder="E-Mail" type="email" value={email} onChange={handleEmailChanged} />
        <Button primary type="submit">
          Register
        </Button>
      </Form>
    </ContentWrapper>
  );
};

storiesOf("Templates / Register Login", module)
  .addDecorator(noMargin)
  .add("no background", () => (
    <RegisterLogin
      onRegisterWithEmail={action("register with email")}
      onSignInWithApple={action("sign in with Apple")}
      onSignInWithGoogle={action("sign in with Google")}
    />
  ));
