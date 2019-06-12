import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";

import * as colors from "./colors";

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Color = styled.div<{ color: string }>`
  display: flex;
  align-items: flex-end;
  width: 64px;
  height: 64px;
  padding: 0.5rem;
  color: #fff;
  text-shadow: 0 0 3px #000;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: ${p => p.color};

  &:last-child {
    margin-right: 0;
  }
`;

storiesOf("Theme / Colors", module).add("Color Swatches", () => (
  <>
    {Object.keys(colors).map(c => (
      <div>
        <h2>{c}</h2>
        <Colors>
          {Object.keys(colors[c]).map(color => (
            <Color color={colors[c][color]}>{color}</Color>
          ))}
        </Colors>
      </div>
    ))}
  </>
));
