import React from "react";
import { IconNode } from "../../atoms/icons/icons";
import { styled } from "linaria/react";
import { Typography } from "../../atoms/typography/typography";
import { primary } from "../../theme/colors/colors";
import { cx, css } from "linaria";

export interface FormFieldProps {
  label?: string;
  icon?: IconNode;
  inline?: boolean;
}

const Base = styled.label<FormFieldProps & React.ComponentProps<"label">>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const IconWrapper = styled.span`
  min-width: 2rem;
  max-width: 2rem;
  font-size: 1.5em;
  margin-right: 0.5rem;
  color: var(--color-300, ${primary[300]});
`;

const InputWrapper = styled.span<FormFieldProps & { className: string }>`
  margin-left: auto;

  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
`;

const nonInlineInputs = css`
  min-width: calc(100% - 1rem);
  margin-top: 1rem;
  flex-direction: column;
  justify-content: flex-start;
`;

const labelStyle = css`
  margin-right: 1rem;
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
      <Typography as="span" variant="label" className={labelStyle}>
        {label}
      </Typography>
      <InputWrapper className={!inline ? nonInlineInputs : ""} inline={inline}>
        {children}
      </InputWrapper>
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
