import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";

import * as colorCombinations from "./color-combinations";

const ColorCombination = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${p => p.backgroundColor};
  overflow: hidden;
`;

const ForegroundColor = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${p => p.color};
`;

storiesOf("Theme / Colors", module).add("Color Combinations", () => (
  <>
    {Object.keys(colorCombinations).map(c => (
      <div>
        <h2>{c}</h2>
        <ColorCombination backgroundColor={colorCombinations[c].bg}>
          <ForegroundColor color={colorCombinations[c].fg} />
        </ColorCombination>
      </div>
    ))}
  </>
));
