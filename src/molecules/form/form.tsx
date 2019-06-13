import React from "react";
import { IconNode } from "../../atoms/icons/icons";
import { styled } from "linaria/react";
import { Typography } from "../../atoms/typography/typography";
import { primary } from "../../theme/colors/colors";
import { cx } from "linaria";

export interface FormFieldProps {
  label?: string;
  icon?: IconNode;
  inline?: boolean;
}

const Base = styled.label<FormFieldProps & React.ComponentProps<"label">>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin: 0;
    flex: 1;
  }
`;

const IconWrapper = styled.span`
  min-width: 2rem;
  max-width: 2rem;
  font-size: 1.5em;
  margin-right: 0.5rem;
  color: var(--color-300, ${primary[300]});
`;

const InputWrapper = styled.span<FormFieldProps>`
  min-width: ${p => (p.inline ? "10rem" : "calc(100% - 1rem)")};
  flex-basis: 0;
  flex-shrink: 1;
  margin-top: ${p => (p.inline ? "0" : "0.5rem")};

  display: flex;
  flex-direction: column;
`;

export const FormField: React.FC<React.ComponentProps<typeof Base>> = ({
  label,
  icon,
  inline = false,
  children,
}) => {
  return (
    <Base inline={inline} className={cx(!inline && "block")}>
      <IconWrapper>{icon}</IconWrapper>
      <Typography as="span" variant="label">
        {label}
      </Typography>
      <InputWrapper inline={inline}>{children}</InputWrapper>
    </Base>
  );
};

export const Form = styled.form`
  padding: 1rem;

  > ${Base as any} {
    margin-bottom: 0.5rem;

    &.block {
      margin-top: 1rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
