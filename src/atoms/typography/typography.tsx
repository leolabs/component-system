import { css, cx } from "linaria";
import React, { ReactHTML } from "react";

import { neutral } from "../../theme/colors/colors";

/** Props for Typography. */
export interface TypographyProps {
  /** The children to apply the formatting to. */
  children?: React.ReactNode;

  /** A CSS class name to pass through. */
  className?: string;

  /**
   * Text color to use.
   *
   * If not set, the component will adapt to the theme color based on
   * the configured variant.
   */
  color?: string;

  /**
   * The element to wrap the contents with.
   *
   * If not set, will be determined based on the configured variant.
   */
  element?: React.ComponentType<{ className?: string }> | keyof ReactHTML;

  /** Optional inline styles to pass through. */
  style?: React.CSSProperties;

  /** The text variant to format according to. */
  variant: Variant;
}

/** CSS configuration and default element for a single typography variant. */
export interface TypographyDefinition {
  /** The CSS class name to apply to use this variant. */
  className: string;

  /** The default element to wrap around the text. */
  element: keyof ReactHTML;
}

/** The text variant. */
export type Variant =
  | "body-1"
  | "body-2"
  | "detail"
  | "label"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-jumbo"
  | "ribbon"
  | "status"
  | "title";

/** Actual CSS definitions of the typography variants. */
export const definitions: Record<Variant, TypographyDefinition> = {
  "body-1": {
    className: css`
      margin: 0;
      color: ${neutral[700]};
      font-size: 1.25rem;
      font-weight: normal;
      letter-spacing: 0px;
      line-height: 1.2;
    `,
    element: "span",
  },
  "body-2": {
    className: css`
      margin: 0;
      color: ${neutral[700]};
      font-size: 1rem;
      font-weight: normal;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "span",
  },
  detail: {
    className: css`
      margin: 0;
      color: var(--color-700);
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "span",
  },
  label: {
    className: css`
      margin: 0;
      color: ${neutral[700]};
      font-size: 1.125rem;
      font-weight: normal;
      letter-spacing: 0px;
      line-height: 1.2;
      white-space: nowrap;
    `,
    element: "label",
  },
  "heading-1": {
    className: css`
      margin: 0;
      color: var(--color-500);
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 1;
    `,
    element: "h2",
  },
  "heading-2": {
    className: css`
      margin: 0;
      color: var(--color-500);
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 1.1;
    `,
    element: "h2",
  },
  "heading-3": {
    className: css`
      margin: 0;
      color: var(--color-700);
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 1.1;
    `,
    element: "h3",
  },
  "heading-jumbo": {
    className: css`
      margin: 0;
      color: white;
      font-size: 2.25rem;
      letter-spacing: 0;
      line-height: 1;
    `,
    element: "h2",
  },
  ribbon: {
    className: css`
      margin: 0;
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
      margin: 0;
      color: ${neutral[700]};
      font-size: 1rem;
      font-weight: normal;
      letter-spacing: 0;
      line-height: 1.2;
      text-transform: uppercase;
      font-variant-numeric: tabular-nums;
    `,
    element: "span",
  },
  title: {
    className: css`
      margin: 0;
      color: var(--color-500);
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 1.2;
    `,
    element: "h2",
  },
};

/**
 * Ensure consistent text formatting by rendering text in a couple of
 * different, but fixed styles.
 *
 * @example
 * ```
 * <Typography variant="status">
 *   Step 2 of 4
 * </Typography>
 * ```
 */
export const Typography: React.SFC<TypographyProps> = ({
  children,
  className,
  color,
  element,
  variant,
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

  return React.createElement(element || definition.element, props, children);
};
