import React from 'react';

class Square extends React.Component {
  render(){
    return(
      <button class="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }

}

export default Square;
