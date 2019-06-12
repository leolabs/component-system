import React from "react";
import { storiesOf } from "@storybook/react";
import { FeatherIcon, iconCl, FontAwesomeIcon } from "./icons";
import * as featherIcons from "react-feather";
import * as fontAwesomeIcons from "@fortawesome/free-solid-svg-icons";
import { styled } from "linaria/react";

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  grid-gap: 1rem;

  .${iconCl} {
    display: block;
    width: 100%;
    height: auto;
    padding: 32px;
    box-sizing: border-box;
  }
`;

const Icon = styled.div`
  text-align: center;
  word-wrap: break-word;
`;

storiesOf("Atoms / Icons", module)
  .add("Feather Icons", () => (
    <Icons>
      {Object.entries(featherIcons).map(([name, icon]) => (
        <Icon>
          <FeatherIcon icon={icon} />
          <span>{name}</span>
        </Icon>
      ))}
    </Icons>
  ))
  .add("FontAwesome", () => (
    <Icons>
      {Object.entries(fontAwesomeIcons)
        .filter(([name, icon]) => (icon as any).icon)
        .map(([name, icon]) => (
          <Icon>
            <FontAwesomeIcon icon={icon as any} />
            <span>{name}</span>
          </Icon>
        ))}
    </Icons>
  ));
