import { configure, addParameters, addDecorator } from "@storybook/react";
import { create } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { themeDecorator } from '../src/stories/helpers';

addParameters({
  options: {
    theme: create({
      base: "light",
      gridCellSize: 16,
    }),
  },
});

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(themeDecorator);

// automatically import all files ending in *.stories.tsx
const reqAtoms = require.context("../src/atoms/", true, /\.stories\.tsx$/);
const reqMolecules = require.context("../src/molecules/", true, /\.stories\.tsx$/);
const reqTemplates = require.context("../src/templates/", true, /\.stories\.tsx$/);
const reqLayout = require.context("../src/layout/", true, /\.stories\.tsx$/);
const reqTheme = require.context("../src/theme/", true, /\.stories\.tsx$/);

function loadStories() {
  require("../src/stories/index/index.stories.tsx");
  reqAtoms.keys().forEach(reqAtoms);
  reqMolecules.keys().forEach(reqMolecules);
  reqTemplates.keys().forEach(reqTemplates);
  reqLayout.keys().forEach(reqLayout);
  reqTheme.keys().forEach(reqTheme);
}

configure(loadStories, module);
