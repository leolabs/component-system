import { styled } from "linaria/react";

/**
 * An unordered list that uses flex layout.
 *
 * Does not show HTML list indicators. Use together with `ListItem`.
 *
 * @example
 * ```
 * <List>
 *   <ListItem>Number one</ListItem>
 *   <ListItem>Number two</ListItem>
 * </List>
 * ```
 */
export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  margin: 0;
  padding: 0;
`;

/**
 * A list item to be used with `List`.
 *
 * Enforces a fixed width of `3rem`.
 *
 * @example
 * ```
 * <List>
 *   <ListItem>Number one</ListItem>
 *   <ListItem>Number two</ListItem>
 * </List>
 * ```
 */
export const ListItem = styled.li`
  display: flex;
  align-items: center;

  height: 3rem;
`;
