import { styled } from "linaria/react";

/**
 * Wrapper for items in the focus of the page
 *
 * Adds:
 * - Padding
 * - Flex column
 * - Margin between direct children
 *
 * Direct children with the literal class "block"
 * will get extra margin-top
 *
 * @example
 * ```
 * <Article>
 *   <EventDetail icon={<FeatherIcon icon={Calendar} />} primary="Tuesday, June 12" />
 *   <Typography variant="heading-2">Article HTML-Tag</Typography>
 *   <Typography variant="body-1">
 *     Das HTML Main Element (<main>) kann als ein Container für den leitenden Inhalt benutzt werden.
 *     Der Hauptteil besteht aus Inhalt, der direkt bezogen oder auf das zentrale Thema eines Bereichs
 *     oder der zentralen Funktionalität einer Applikation aufbaut.
 *   </Typography>
 * </Article>
 * ```
 */
export const Article = styled.article<{ marginMult?: number }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 1rem;

  > * {
    margin-bottom: ${p => `${0.5 * (p.marginMult === undefined ? 1 : p.marginMult)}rem`};

    &.block {
      margin-top: 1rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
