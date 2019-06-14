import React from "react";
import { storiesOf } from "@storybook/react";
import { ContentWrapper } from "../../layout/content-wrapper/content-wrapper";
import { Header } from "../../molecules/header/header";
import { Overlay } from "../../layout/overlay/overlay";
import { Stepper } from "../../molecules/stepper/stepper";
import { TemplateChooser } from "../../molecules/template-chooser/template-chooser";
import { action } from "@storybook/addon-actions";
import { TemplateIcon } from "../../atoms/template-icon/template-icon";
import { FontAwesomeIcon, FeatherIcon } from "../../atoms/icons/icons";
import { red, yellowVivid, lightBlue, green, indigo } from "../../theme/colors/colors";
import {
  faSun,
  faGlassCheers,
  faMusic,
  faBirthdayCake,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import { Jumbo } from "../../molecules/jumbo/jumbo";
import { Ribbon } from "../../atoms/ribbon/ribbon";
import { Typography } from "../../atoms/typography/typography";
import { noMargin, StateInjector } from "../../stories/helpers";
import { EventDetail } from "../../molecules/event-detail/event-detail";
import { Calendar, MapPin } from "react-feather";
import { Article } from "../../layout/article/article";
import { Theme } from "../../theme/theme-context/theme-context";
import { Well } from "../../molecules/well/well";

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

storiesOf("Templates / Event Preview", module)
  .addDecorator(noMargin)
  .add("default", () => (
    <StateInjector init={lightBlue}>
      {(currentColor, setColor) => (
        <ContentWrapper stepper templateChooser>
          <Header>
            <Ribbon>Preview</Ribbon>
          </Header>
          <Theme color={currentColor}>
            <Jumbo background="https://source.unsplash.com/qWlkCwBnwOE/500x333">
              <Typography variant="heading-jumbo">My Fabulous Birthday Party</Typography>
            </Jumbo>
            <Article marginMult={3}>
              <EventDetail
                icon={<FeatherIcon icon={Calendar} />}
                primary="Friday, June 21"
                secondary="18:30 - 21:30"
              />
              <EventDetail
                icon={<FeatherIcon icon={MapPin} />}
                primary="Steve Jobs Theater, San Jose"
              />
              <Well>
                <Typography variant="heading-3" element="h3">
                  About
                </Typography>
                <Typography variant="body-2">
                  {`Cake and food so appetizing and sweet oh!
We're having a party so you're invited for a treat!
Come party hats and balloons will make your day fun, so we want you here when the party's begun!`}
                </Typography>
              </Well>
              <Well primary>
                <Typography variant="body-1">This invitation is for:</Typography>
                <Typography variant="heading-3" element="p">
                  Guest Name
                </Typography>
              </Well>
            </Article>
          </Theme>
          <Overlay>
            <TemplateChooser>
              {templates.map(({ color, icon }) => (
                <TemplateIcon
                  key={color[500]}
                  color={color}
                  onClick={() => setColor(color)}
                  selected={color === currentColor}
                >
                  <FontAwesomeIcon icon={icon} />
                </TemplateIcon>
              ))}
            </TemplateChooser>
            <Stepper step={2} maxStep={3} onChange={action("step-change")} />
          </Overlay>
        </ContentWrapper>
      )}
    </StateInjector>
  ));
