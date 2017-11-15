import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {

  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
constructor() {
  super();
  this.state = {
    leftOpperand: "",
    rightOpperand: "",
    opperator: "",
    displayContent: "",
  }
  this.handleClick=this.handleClick.bind(this);
  this.add=this.add.bind(this);
  this.multiply=this.multiply.bind(this);
  this.subtract=this.subtract.bind(this);
  this.divide=this.divide.bind(this);
}

multiply(a,b) {
  return a * b
}

add(a,b) {
  return a + b
}

subtract(a,b) {
  return a - b
}

divide(a,b) {
  return a / b
}

handleClick(e) {
    e.preventDefault();
    let left = this.state.leftOpperand;
    let right = this.state.rightOpperand;
    let opp = this.state.opperator;
    let display = this.state.displayContent;
    const content = e.target.textContent;

    if (!right && !opp && content !== "=") {
      this.setState({
        leftOpperand: left + content,
        displayContent: display + content
      })
    }

    if (left && opp && (content !== "=" && content !== "x" && content !== "+" && content !=="-" && content !=="/")) {
      this.setState({
        rightOpperand: right + content,
        displayContent: display + content
      })
    }
      if(content === "=" || !opp)
      switch (content) {
        case "x":
          this.setState({
            opperator: this.multiply,
            displayContent: "",
          })
          break;
        case "+":
          this.setState({
            opperator: this.add,
            displayContent: "",

          })
          break;
        case "-":
          this.setState({
            opperator: this.subtract,
            displayContent: "",

          })
          break;
        case "/":
          this.setState({
            opperator: this.divide,
            displayContent: "",
          })
          break;
        case "C":
          this.setState({
            opperator: null,
            displayContent: "",
            leftOpperand:"",
            rightOpperand:"",
          })
          break;
        case "=":
          this.setState({
            opperator: null,
            displayContent: this.state.opperator(parseFloat(left, 10), parseFloat(right, 10)),
            leftOpperand: this.state.opperator(parseInt(left, 10), parseInt(right, 10)),
            rightOpperand: "",
          })
          break;
        default:
        break;
    }
  }

  render() {
    return (
      <div className="calculator">
         <Display content={this.state.displayContent} />

        <NumberPad handleClick={this.handleClick} />
      </div>
    );
  }
}
//NumberPad is a key value pair, its own object in NumberPad file...consolelog is a prop if NumberPad
export default Calculator;
