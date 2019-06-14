import { styled } from "linaria/react";
import { shortTime } from "../../theme/timing/timing";

export interface ContentWrapperProps {
  header?: boolean;
  stepper?: boolean;
  templateChooser?: boolean;
}

export const ContentWrapper = styled.main<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  transition: padding ${shortTime};

  padding-top: ${p => (p.header === undefined || p.header ? "4rem" : "0")};
  padding-bottom: ${p => `${(p.stepper ? 4 : 0) + (p.templateChooser ? 9 : 0)}rem`};
`;
