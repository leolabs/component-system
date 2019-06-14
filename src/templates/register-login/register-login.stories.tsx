import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";
import React, { useState, useCallback } from "react";

import { Typography } from "../../atoms/typography/typography";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { ContentWrapper } from "../../layout/content-wrapper/content-wrapper";
import { Header } from "../../molecules/header/header";
import { Jumbo } from "../../molecules/jumbo/jumbo";
import { noMargin } from "../../stories/helpers";
import { indigo } from "../../theme/colors/colors";

import Apple from "./Apple.svg";
import Google from "./Google.svg";

export interface RegisterLoginProps {
  onSignInWithApple?: React.MouseEventHandler;
  onSignInWithGoogle?: React.MouseEventHandler;
  onRegisterWithEmail?: (email: string) => void;
}

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin-top: 2rem;
  padding: 0 2rem;

  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const LoginButton = styled(Button)`
  display: flex;
  align-items: center;

  > span {
    flex-grow: 1;
  }
`;

const CompanyIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;

  object-fit: cover;
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

      <LoginForm onSubmit={handleSubmit}>
        <LoginButton color={indigo} onClick={onSignInWithApple} type="button">
          <CompanyIcon src={Apple} />
          <Typography variant="button">Sign in with Apple</Typography>
        </LoginButton>
        <LoginButton color={indigo} onClick={onSignInWithGoogle} type="button">
          <CompanyIcon src={Google} />
          <Typography variant="button">Sign in with Google</Typography>
        </LoginButton>

        <Typography variant="body-1">or</Typography>

        <Input placeholder="E-Mail" type="email" value={email} onChange={handleEmailChanged} />
        <Button primary type="submit">
          <Typography variant="button">Register</Typography>
        </Button>
      </LoginForm>
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
