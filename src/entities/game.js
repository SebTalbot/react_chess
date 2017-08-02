import React from 'react';

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
          board
        </div>
        <div className="game-info">
          infos
        </div>
      </div>
    );
  }

}

export default Game;
