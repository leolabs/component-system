import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { yellowVivid, indigo, lightBlue, green, red } from "../../theme/colors/colors";
import { Overlay } from "../../layout/overlay/overlay";
import { TemplateChooser } from "./template-chooser";
import { TemplateIcon } from "../../atoms/template-icon/template-icon";
import { FontAwesomeIcon } from "../../atoms/icons/icons";
import {
  faSun,
  faGlassCheers,
  faMusic,
  faBirthdayCake,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import { Stepper } from "../stepper/stepper";

const templates = [
  {
    color: lightBlue,
    icon: faGlassCheers,
  },
  {
    color: yellowVivid,
    icon: faSun,
  },
  {
    color: green,
    icon: faMusic,
  },
  {
    color: red,
    icon: faBirthdayCake,
  },
  {
    color: indigo,
    icon: faBicycle,
  },
];

const ControlledTemplateChooser: React.FC = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <TemplateChooser>
      {templates.map((t, i) => (
        <TemplateIcon selected={selected === i} color={t.color} onClick={() => setSelected(i)}>
          <FontAwesomeIcon icon={t.icon} />
        </TemplateIcon>
      ))}
    </TemplateChooser>
  );
};

storiesOf("Molecules / Template Chooser", module)
  .add("default", () => (
    <TemplateChooser>
      <TemplateIcon color={lightBlue}>
        <FontAwesomeIcon icon={faGlassCheers} />
      </TemplateIcon>
      <TemplateIcon color={yellowVivid}>
        <FontAwesomeIcon icon={faSun} />
      </TemplateIcon>
      <TemplateIcon color={green}>
        <FontAwesomeIcon icon={faMusic} />
      </TemplateIcon>
      <TemplateIcon color={red}>
        <FontAwesomeIcon icon={faBirthdayCake} />
      </TemplateIcon>
      <TemplateIcon color={indigo}>
        <FontAwesomeIcon icon={faBicycle} />
      </TemplateIcon>
    </TemplateChooser>
  ))
  .add("in overlay", () => (
    <Overlay>
      <TemplateChooser>
        <TemplateIcon color={lightBlue}>
          <FontAwesomeIcon icon={faGlassCheers} />
        </TemplateIcon>
        <TemplateIcon color={yellowVivid}>
          <FontAwesomeIcon icon={faSun} />
        </TemplateIcon>
        <TemplateIcon color={green}>
          <FontAwesomeIcon icon={faMusic} />
        </TemplateIcon>
        <TemplateIcon color={red}>
          <FontAwesomeIcon icon={faBirthdayCake} />
        </TemplateIcon>
        <TemplateIcon color={indigo}>
          <FontAwesomeIcon icon={faBicycle} />
        </TemplateIcon>
      </TemplateChooser>
    </Overlay>
  ))
  .add("controlled", () => (
    <Overlay>
      <ControlledTemplateChooser />
    </Overlay>
  ))
  .add("with stepper", () => (
    <Overlay>
      <ControlledTemplateChooser />
      <Stepper step={1} maxStep={4} />
    </Overlay>
  ));
