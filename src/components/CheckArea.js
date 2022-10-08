import React from "react";
import Square from "./Square.js";
class CheckArea extends React.Component {
  checkNeighbors(i, j, square, color, alreadyChecked, area) {
    // Check if current element is already checked
    if (!alreadyChecked.includes(`${i},${j}`)) {
      area[color].push([i, j]);
      alreadyChecked.push(`${i},${j}`);

      // For each neighbor I check his own neighbor until one without neighbor with same color
      // Check Top
      if (i !== 0 && square[i - 1][j] === color) {
        this.checkNeighbors(i - 1, j, square, color, alreadyChecked, area);
      }

      // Check Left
      if (j !== 0 && square[i][j - 1] === color) {
        this.checkNeighbors(i, j - 1, square, color, alreadyChecked, area);
      }

      // Check Bottom
      if (i < square.length - 1 && square[i + 1][j] === color) {
        this.checkNeighbors(i + 1, j, square, color, alreadyChecked, area);
      }

      // Check Right
      if (j < square[i].length - 1 && square[i][j + 1] === color) {
        this.checkNeighbors(i, j + 1, square, color, alreadyChecked, area);
      }
    }
  }

  render() {
    let square = this.props.square;
    let currentColor;
    let currentBest = [];
    let currentArea;
    let alreadyChecked = [];
    let finalBest = {};

    // Loop in square array
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
        currentColor = square[i][j];
        currentArea = {};
        currentArea[currentColor] = [];

        // Check top, bottom, left, right for each
        this.checkNeighbors(
          i,
          j,
          square,
          currentColor,
          alreadyChecked,
          currentArea
        );

        // If currentBest is better than current finalBest => finalBest become currentBest
        if (
          currentBest.length === 0 ||
          currentArea[currentColor].length >= currentBest.length
        ) {
          currentBest = currentArea[currentColor];
          finalBest["color"] = currentColor;
          finalBest["data"] = currentArea[currentColor];
        }
      }
    }

    return (
      <div className="block-square">
        <Square square={square} finalBest={finalBest} />
        {Object.keys(finalBest).length !== 0 && (
          <div className="resultText">
            The biggest area contains {finalBest["data"].length} cells with{" "}
            {finalBest["color"]} color
          </div>
        )}
      </div>
    );
  }
}

export default CheckArea;
