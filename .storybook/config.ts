import { configure, addParameters, addDecorator } from "@storybook/react";
import { create } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

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

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  require("../src/stories/index/index.stories.tsx");
  req
    .keys()
    .filter(k => !k.includes("index.stories.tsx"))
    .forEach(req);
}

configure(loadStories, module);
