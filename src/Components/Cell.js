import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetroMinos";

const Cell = ({ type }) => {
  return (
    <StyledCell type={"L"} color={TETROMINOS["L"].color}>
      cell
    </StyledCell>
  );
};

export default Cell;
