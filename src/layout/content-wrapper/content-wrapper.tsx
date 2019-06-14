import { styled } from "linaria/react";
import { shortTime } from "../../theme/timing/timing";

/** Props for the ContentWrapper component. */
export interface ContentWrapperProps {
  /** Whether the content wrapper contains a header element. */
  header?: boolean;

  /** Whether the content wrapper is used for the stepper component. */
  stepper?: boolean;

  /** Whether the content wrapper is used for the template chooser. */
  templateChooser?: boolean;
}

/**
 * A wrapper element that enforces flex column layout and adds some
 * padding to its children.
 */
export const ContentWrapper = styled.main<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  transition: padding ${shortTime};

  padding-top: ${p => (p.header === undefined || p.header ? "4rem" : "0")};
  padding-bottom: ${p => `${(p.stepper ? 4 : 0) + (p.templateChooser ? 9 : 0)}rem`};
`;
