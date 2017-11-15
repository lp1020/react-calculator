import React, { Component } from 'react';

class Display extends Component {
  // the h3 should show the numbers or symbols in the calculator display
  // where should this information be coming from?
  // does this need to be a class component?
  render() {
  return (
    <div className="display">
      <h5 key="h1" className="display_text">
        {this.props.content}
      </h5>
    </div>
  );
}
}
export default Display;

