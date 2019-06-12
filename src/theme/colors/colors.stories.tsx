import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "linaria/react";

import * as colors from "./colors";

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Color = styled.div<{ color: string }>`
  width: 128px;
  height: 128px;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: ${p => p.color};

  &:last-child {
    margin-right: 0;
  }
`;

storiesOf("Theme", module).add("Colors", () => (
  <>
    {Object.keys(colors).map(c => (
      <div>
        <h2>{c}</h2>
        <Colors>
          {Object.keys(colors[c]).map(color => (
            <Color color={colors[c][color]} />
          ))}
        </Colors>
      </div>
    ))}
  </>
));
