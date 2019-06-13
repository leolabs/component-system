import { styled } from "linaria/react";
import React from "react";
import { PlusCircle } from "react-feather";

import { Header } from "../../molecules/header/header";
import { Jumbo } from "../../molecules/jumbo/jumbo";
import { Typography } from "../../atoms/typography/typography";
import { Button } from "../../atoms/button/button";
import { FeatherIcon } from "../../atoms/icons/icons";
import { Theme } from "../../theme/theme-context/theme-context";
import { orange } from "../../theme/colors/colors";

export interface LandingPageProps {
  onCreateEvent?: React.MouseEventHandler;
}

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem;
  text-align: center;
`;

const Iphone = styled.img`
  margin-top: 1.5rem;
  filter: grayscale(100%);
  object-fit: cover;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding-top: 4rem;
`;

export const LandingPage: React.FC<LandingPageProps> = ({ onCreateEvent }) => (
  <Theme color={orange}>
    <Wrapper>
      <Header />

      <Jumbo>
        <Typography variant="heading-2">Social Planning, Simplified.</Typography>
        <Typography variant="body-2">
          Set up an event, send invites and bring people together
        </Typography>
        <Button onClick={onCreateEvent} primary>
          <FeatherIcon icon={PlusCircle} />
          <Typography variant="button">Create an event</Typography>
        </Button>
      </Jumbo>

      <Instructions>
        <Typography variant="heading-2">Fill in details</Typography>

        <Iphone src="https://5cff9cade7ecba35cf6e2ce4--gracious-lalande-80a605.netlify.com/design/images/ppO4vrTkbORJof7VbYzq6fFtnV8.png" />
      </Instructions>
    </Wrapper>
  </Theme>
);
