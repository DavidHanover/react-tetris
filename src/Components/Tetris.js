import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import React from "react";

const Tetris = () => {
  return (
    <div>
      <Stage>
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </Stage>
    </div>
  );
};

export default Tetris;
