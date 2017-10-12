// This is the view of the game
import React from 'react';

export class Board extends React.Component {
  renderSquare(y,x) {
    return (
      <Square
        key={'y'+y.toString()+'x'+x.toString()}
        value={this.props.squares[y][x]}
        onClick={() => this.props.onClick(y,x)}
      />
    );
  }

  render() {
    let columns = [];
    for (let y = 0; y < this.props.squares.length; y++) {
      let row = [];
        for (let x = 0; x < this.props.squares[y].length; x++) {
          row.push(this.renderSquare(y, x));
        }
      columns.push(<div key={y.toString()}>{row}</div>);
    }
    const board = <div>{columns}</div>;
    return board;
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
