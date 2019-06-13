import { styled } from "linaria/react";

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  height: 3rem;
`;
