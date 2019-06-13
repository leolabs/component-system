import { storiesOf } from "@storybook/react";
import React from "react";
import { orange } from "../../theme/colors/colors";
import { styled } from "linaria/react";
import { ContentWrapper } from "./content-wrapper";
import { Header } from "../../molecules/header/header";
import { Stepper } from "../../molecules/stepper/stepper";
import { Overlay } from "../overlay/overlay";
import { Theme } from "../../theme/theme-context/theme-context";

const Content = styled.div`
  height: 150vh;
  background: ${orange[50]};
  border-top: 4px solid ${orange[200]};
  border-bottom: 4px solid ${orange[200]};
`;

storiesOf("Layout / Content Wrapper", module).add("default", () => (
  <Theme color={orange}>
    <Header />
    <ContentWrapper stepper>
      <Content />
    </ContentWrapper>
    <Overlay>
      <Stepper step={1} maxStep={4} />
    </Overlay>
  </Theme>
));
