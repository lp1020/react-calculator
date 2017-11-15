import React, { Component } from 'react';
//if something just renders something, it should be stateless(doesn't need 'this')
class Tile extends Component {
  render(){
  return (
    <div
      style={{width: this.props.size === 2 ? '200px' : ''}}
      className='tile'
      onClick={this.props.handleClick}
    >
      <h5>
        { this.props.symbol }
      </h5>
    </div>
  );
  }
}

export default Tile;
