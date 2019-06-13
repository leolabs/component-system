import React from "react";
import { storiesOf } from "@storybook/react";
import { FeatherIcon, iconCl, FontAwesomeIcon } from "./icons";
import { Icon as Feather, Menu, ChevronRight, Clock, Info, User } from "react-feather";
import {
  faSun,
  faGlassCheers,
  faMusic,
  faBirthdayCake,
  faBicycle,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "linaria/react";

const featherIcons: { [k: string]: Feather } = {
  Menu,
  ChevronRight,
  Clock,
  Info,
  User,
};

const faIcons: { [k: string]: IconDefinition } = {
  faSun,
  faGlassCheers,
  faMusic,
  faBirthdayCake,
  faBicycle,
};

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 2rem;

  .${iconCl} {
    display: block;
    width: 4rem;
    height: auto;
    padding: 32px;
  }
`;

const Icon = styled.div`
  text-align: center;
  word-wrap: break-word;
`;

storiesOf("Atoms / Icons", module)
  .add("Feather Icons", () => (
    <>
      <Icons>
        {Object.entries(featherIcons).map(([name, icon]) => (
          <Icon>
            <FeatherIcon icon={icon} />
            <span>{name}</span>
          </Icon>
        ))}
      </Icons>
      <a href="https://feathericons.com/" target="_blank">
        More Feather Icons
      </a>
    </>
  ))
  .add("FontAwesome", () => (
    <>
      <Icons>
        {Object.entries(faIcons).map(([name, icon]) => (
          <Icon>
            <FontAwesomeIcon icon={icon as any} />
            <span>{name}</span>
          </Icon>
        ))}
      </Icons>
      <a href="https://fontawesome.com/icons" target="_blank">
        More FontAwesome Icons
      </a>
    </>
  ));
