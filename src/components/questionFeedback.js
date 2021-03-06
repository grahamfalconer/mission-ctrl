import React, { Component } from "react";

const ANSWER_THRESHOLD = 2

export class QuestionFeedback extends Component {
  joinCombo = () => {
    return this.props.hint.join(" + ");
  };

  firstKey = () => {
    return this.props.hint[0]
  }
  

  render() {
    if (this.props.incorrectAttempts === 2 && this.props.hint.length === 4) {
      return <p>Hint: {this.firstKey()} + ? + ? + ?</p>
    }
    if (this.props.incorrectAttempts === 2 && this.props.hint.length === 3) {
      return <p>Hint: {this.firstKey()} + ? + ?</p>
    } 
    if (this.props.incorrectAttempts === 2) {
      return <p>Hint: {this.firstKey()} + ?</p>
    }

    if (this.props.incorrectAttempts > ANSWER_THRESHOLD) {
      return <h3>Try this: {this.joinCombo()}</h3>;
    }
    if (this.props.incorrectAttempts > 0) {
      return <p>Try Again</p>
    }   
    return null 
  }
}

export default QuestionFeedback;
