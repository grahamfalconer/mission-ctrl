import React, { Component } from 'react'

export class GameComplete extends Component {
  render() {
    return (
      <div>
        <p>Game Complete</p>
        <p>Total Correct: {this.props.correct}</p>
        <p>Total Mistakes: {this.props.mistakes}</p>
      </div>
    )
  }
}



export default GameComplete