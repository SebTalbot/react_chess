import React from 'react';
import Board from './board.js';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          infos
        </div>
      </div>
    );
  }

}

export default Game;
