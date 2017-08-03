import React from 'react';
import Square from './square.js'

class Board extends React.Component {
  render() {
    const rows = Array(8).fill(null);

    for(let y = 0; y < 8; y++){
      let currentRow = Array(8).fill(null);

      for(let x = 0; x< 8; x++){
        currentRow[x] = this.renderSquare(y,x);
      };

      rows[y] = (<div class="board-row">{currentRow}</div>);
    };

    return( <div>{rows}</div> );
  }

  renderSquare(y,x){
    return(
      <Square 
        y={y}
        x={x}
        value={this.props.squares[y][x]}
        onClick={ ()=> this.props.onClick(y,x) }
      />
    );
  }

}

export default Board;
