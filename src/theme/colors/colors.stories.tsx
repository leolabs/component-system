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

const ColorCombination = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-right: 1rem;
  margin-bottom: 1rem;
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

storiesOf("Theme / Colors", module).add("Color Swatches", () => (
  <>
    {Object.keys(colors).map(c => (
      <div>
        <h2>{c}</h2>
        <Colors>
          {Object.keys(colors[c]).map(color => (
            <Color color={colors[c][color]}>{color}</Color>
          ))}
          <ColorCombination backgroundColor={colors[c][100]}>
            <ForegroundColor color={colors[c][900]} />
          </ColorCombination>

          <ColorCombination backgroundColor={colors[c][100]}>
            <ForegroundColor color={colors[c][500]} />
          </ColorCombination>
        </Colors>
      </div>
    ))}
  </>
));
