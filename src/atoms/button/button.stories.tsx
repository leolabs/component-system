import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./button";

storiesOf("Button", module).add("normal button", () => <Button>Hello World</Button>);
