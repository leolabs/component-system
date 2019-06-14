import React from "react";
import { styled } from "linaria/react";
import { Typography } from "../../atoms/typography/typography";
import { neutral } from "../../theme/colors/colors";

const StyledTemplateChooser = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  background: ${neutral[50]};

  > :first-child {
    display: block;
    padding: 1rem;
  }

  > .templates {
    max-width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    padding-bottom: 1rem;

    :after {
      content: "";
      display: flex;
      min-width: 1rem;
      flex-grow: 0;
    }

    > div {
      width: 4.5rem;
      min-width: 4.5rem;
      margin-left: 1rem;
    }
  }
`;

/**
 * A component that can contain multiple `TemplateIcon`s.
 *
 * @example
 * <TemplateChooser>
 *   <TemplateIcon>
 *     <FontAwesomeIcon icon={faBirthdayCake} color={red} />
 *   </TemplateIcon>
 *   <TemplateIcon>
 *     <FontAwesomeIcon icon={faSun} color={yellow} />
 *   </TemplateIcon>
 *   <TemplateIcon>
 *     <FontAwesomeIcon icon={faBike} color={green} />
 *   </TemplateIcon>
 * </TemplateChooser>
 */
export const TemplateChooser: React.FC<React.ComponentProps<typeof StyledTemplateChooser>> = ({
  children,
  ...props
}) => (
  <StyledTemplateChooser {...props}>
    <Typography variant="body-1">Choose a Template</Typography>
    <div className="templates">{children}</div>
  </StyledTemplateChooser>
);
