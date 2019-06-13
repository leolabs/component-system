import React from "react";
import { IconNode } from "../../atoms/icons/icons";
import { styled } from "linaria/react";
import { Typography } from "../../atoms/typography/typography";
import { primary } from "../../theme/colors/colors";

export interface FormFieldProps {
  label?: string;
  icon?: IconNode;
  inline?: boolean;
}

export interface StyleProps {
  inline: boolean;
}

const Base = styled.label<StyleProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: ${p => (p.inline ? "0" : "1rem 0")};

  > * {
    margin: 0 0.5rem;
    flex: 1;
  }
`;

const IconWrapper = styled.span`
  min-width: 2rem;
  max-width: 2rem;
  font-size: 1.5em;
  color: var(--color-300, ${primary[300]});
`;
const InputWrapper = styled.span<StyleProps>`
  min-width: ${p => (p.inline ? "10rem" : "calc(100% - 1rem)")};
  flex-basis: 0;
  flex-shrink: 1;
  margin-top: ${p => (p.inline ? "0" : "0.5rem")};

  display: flex;
  flex-direction: column;
`;

export const FormField: React.SFC<FormFieldProps> = ({ label, icon, inline = false, children }) => {
  return (
    <Base inline={inline}>
      <IconWrapper>{icon}</IconWrapper>
      <Typography as="span" variant="label">
        {label}
      </Typography>
      <InputWrapper inline={inline}>{children}</InputWrapper>
    </Base>
  );
};
