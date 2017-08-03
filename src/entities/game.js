import React from 'react';
import Board from './board.js';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(8).fill( Array(8).fill(null) ),
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

  handleClick(y,x){
    const squares = this.state.squares.slice();
    const row = squares[y].slice();
    row[x] = 'x';

    squares[y] = row;

    this.setState({
      squares: squares,
    })

  }

}

export default Game;
