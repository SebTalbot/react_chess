import React from 'react';

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
    //tmp
    return(<p>{x}, { y }</p>)
  }

}

export default Board;
