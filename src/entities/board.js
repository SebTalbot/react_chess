import React from 'react';

class Board extends React.Component {
  render() {
    const rows = Array(8).fill(null);

    for(let y = 0; y < 8; y++){
      let currentRow = Array(8).fill(null);

      for(let x = 0; x< 8; x++){
        currentRow[x] = this.renderSquare(y,x);
      };

      rows[y] = (<div key={y} className="board-row">{currentRow}</div>);
    };

    return( <div>{rows}</div> );
  }

  renderSquare(y,x){
    const key=y+","+x;
    return(
      <Square 
        key={key}
        value={this.props.squares[y][x]}
        onClick={ ()=> this.props.onClick(y,x) }
      />
    );
  }


}

function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Board;
