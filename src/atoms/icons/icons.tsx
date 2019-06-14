import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { css, cx } from "linaria";
import { styled } from "linaria/react";
import React, { ComponentProps } from "react";
import { Icon as Feather, Props as FeatherProps } from "react-feather";

export const iconCl = css`
  display: inline-block;
  width: auto;
  height: 1.2em;
  vertical-align: top;
`;

/**
 * An icon wrapper for FontAwesome icons.
 *
 * The icon will always have the same color as its container and will be 1.2em large
 * by default.
 *
 * List of all available icons: https://fontawesome.com/icons?m=free
 *
 * With a simple icon:
 * @example
 * ```
 * import {faBirthdayCake} from "@fortawesome/free-solid-svg-icons";
 *
 * <FontAwesomeIcon icon={faBirthdayCake} />
 * ```
 */
export const FontAwesomeIcon: React.FC<{ icon: IconDefinition } & ComponentProps<"svg">> = ({
  className,
  icon,
  ...props
}) => (
  <svg
    {...props}
    className={cx(iconCl, className)}
    viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}
    width={Math.max(icon.icon[0], icon.icon[1])}
    height={Math.max(icon.icon[0], icon.icon[1])}
    preserveAspectRatio="xMidYMid"
  >
    <path fill="currentColor" d={icon.icon[4]} />
  </svg>
);

/**
 * An icon wrapper for Feather icons.
 *
 * The icon will always have the same color as its container and will be 1.2em large
 * by default.
 *
 * List of all available icons: https://feathericons.com/
 *
 * With a simple icon:
 * @example
 * ```
 * import {Menu} from "react-feather";
 *
 * <FeatherIcon icon={Menu} />
 * ```
 */
export const FeatherIcon: React.FC<{ icon: Feather } & FeatherProps> = ({
  className,
  icon: Icon,
  ...props
}) => <Icon size="" {...props} className={cx(iconCl, className)} />;

/**
 * An icon wrapper for company icons.
 *
 * The icon will always be 1.5em large by default.
 *
 * With a simple icon:
 * @example
 * ```
 * import apple from "./apple.svg";
 *
 * <CompanyIcon src={apple} />
 * ```
 */
export const CompanyIcon = styled.img`
  height: 1.5em;
  width: 1.5em;

  object-fit: contain;
`;

export type IconNode = React.ReactElement<
  typeof FeatherIcon | typeof FontAwesomeIcon | typeof CompanyIcon
>;
