// This class is mainly the controller of the project

import React from 'react';
import Board from './components/board.js';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: this.initSquares(),
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(y,x)=> this.handleClick(y,x)}
          />
        </div>
        <div className="game-info">
          infos
        </div>
      </div>
    );
  }

  initSquares() {
    let array = Array(8).fill(null);
    for(let i=0; i<8; i++){
      let row = Array(8).fill(null);
      array[i] = row;
    }
    return array;

  }

  // EVENTS
  handleClick(y,x){
  }

}

export default Game;
