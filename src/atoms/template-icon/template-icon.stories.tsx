import { storiesOf } from "@storybook/react";
import React from "react";

import { StaticTemplateIcon } from "./template-icon";
import { FontAwesomeIcon } from "../icons/icons";
import { faSun, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { flexColumn } from "../../stories/helpers";
import { yellowVivid, red } from "../../theme/colors/colors";
import { styled } from "linaria/react";

const TemplateIconGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 80px);
`;

storiesOf("Atoms / Template Icon", module)
  .addDecorator(flexColumn)
  .add("default", () => (
    <TemplateIconGrid>
      <StaticTemplateIcon color={yellowVivid}>
        <FontAwesomeIcon icon={faSun} />
      </StaticTemplateIcon>
      <StaticTemplateIcon color={yellowVivid} selected>
        <FontAwesomeIcon icon={faSun} />
      </StaticTemplateIcon>
      <StaticTemplateIcon color={red}>
        <FontAwesomeIcon icon={faBirthdayCake} />
      </StaticTemplateIcon>
      <StaticTemplateIcon color={red} selected>
        <FontAwesomeIcon icon={faBirthdayCake} />
      </StaticTemplateIcon>
    </TemplateIconGrid>
  ));
