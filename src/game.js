// This class is mainly the controller of the project
import React from 'react';
import { Board } from './board.js';

export class Game extends React.Component {
  constructor() {
    super();
    const initBoard =
      [
        [1,0,0,0,0,0,0,0],
        [2,0,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0],
        [4,0,0,0,0,0,0,0],
        [5,0,0,0,0,0,0,0],
        [6,0,0,0,0,0,0,0],
        [7,0,0,0,0,0,0,0],
        [8,0,0,0,0,0,0,0]
      ];
    this.state = {
      squares: initBoard,
      whiteIsNext: true
    };
  }

  render(){
    return <Board
             squares={this.state.squares}
             onClick={(y,x) => this.handleClick(y,x)}
           />;
  }

  handleClick(y,x) {
    const squares = this.state.squares;
    squares[y][x] = 'x';
    this.setState(
      squares: squares
    );
  }
}
