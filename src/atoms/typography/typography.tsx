import { css, cx, CSSProperties } from "linaria";
import React, { ReactHTML } from "react";

import { neutral } from "../../theme/colors/colors";

export interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  element?: React.ComponentType<{ className?: string }> | keyof ReactHTML;
  style?: any;
  variant: Variant;
  as?: string;
}

export interface TypographyDefinition {
  className: string;
  element: keyof ReactHTML;
}

export type Variant =
  | "body-1"
  | "body-2"
  | "button"
  | "detail"
  | "form-label"
  | "heading-1"
  | "heading-2"
  | "heading-jumbo"
  | "ribbon"
  | "status"
  | "title";

const baseStyles = {
  margin: 0,
};

const baseNeutral: CSSProperties = {
  ...baseStyles,
  color: neutral[700],
};

const basePrimary: CSSProperties = {
  ...baseStyles,
  color: "var(--color-500)",
};

export const definitions: Record<Variant, TypographyDefinition> = {
  "body-1": {
    className: css`
      ${baseNeutral}

      font-size: 1.25rem;
      font-weight: regular;
      letter-spacing: 0px;
      line-height: 1.2;
    `,
    element: "span",
  },
  "body-2": {
    className: css`
      ${baseNeutral}

      font-size: 1rem;
      font-weight: medium;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "span",
  },
  button: {
    className: css`
      ${baseStyles}

      font-size: 1rem;
      font-weight: semibold;
      letter-spacing: 0;
      line-height: 1.2;
      text-transform: uppercase;
    `,
    element: "span",
  },
  detail: {
    className: css`
      ${baseStyles}

      color: var(--color-900);
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "span",
  },
  "form-label": {
    className: css`
      ${baseNeutral}

      font-size: 1.125rem;
      font-weight: regular;
      letter-spacing: 0px;
      line-height: 1.2;
      white-space: nowrap;
    `,
    element: "label",
  },
  "heading-1": {
    className: css`
      ${basePrimary}

      font-size: 2rem;
      font-weight: medium;
      letter-spacing: 0;
      line-height: 1;
    `,
    element: "h2",
  },
  "heading-2": {
    className: css`
      ${basePrimary}

      font-size: 1.5rem;
      font-weight: semibold;
      letter-spacing: 0;
      line-height: 1.1;
    `,
    element: "h2",
  },
  "heading-jumbo": {
    className: css`
      ${baseStyles}

      color: white;
      font-size: 2.25rem;
      letter-spacing: 0;
      line-height: 1;
    `,
    element: "h2",
  },
  ribbon: {
    className: css`
      ${baseStyles}

      color: white;
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "span",
  },
  status: {
    className: css`
      ${baseNeutral}

      font-size: 1rem;
      font-weight: regular;
      letter-spacing: 0;
      line-height: 1.2;
      text-transform: uppercase;
      font-variant-numeric: tabular-nums;
    `,
    element: "span",
  },
  title: {
    className: css`
      ${basePrimary}

      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "h2",
  },
};

export const Typography: React.SFC<TypographyProps> = ({
  children,
  className,
  color,
  element,
  variant,
  as,
  ...rest
}) => {
  const definition = definitions[variant];
  if (!definition) {
    throw new Error(`Missing typography definition for ${variant}.`);
  }

  const props: any = {
    ...rest,
    className: cx(definition.className, className),
  };

  if (color) {
    props.style = { ...props.style, color };
  }

  return React.createElement(as || element || definition.element, props, children);
};
