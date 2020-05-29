import React, { Component } from 'react'
import Question from './question'
import GameComplete from './gameComplete'

export class Game extends Component {
  constructor() {
    super()
    this.state = {
      level: 0,
      totalErrors: 0,
      totalCorrect: 0,
      shortcutSet: [
        { name: "Copy", combo: ['Control', 'c'] },
        { name: "Cut", combo: ['Control', 'x'] },
        { name: "Undo", combo: ['Control', 'z'] },
        { name: "Paste", combo: ['Control', 'v'] },
      ],
      currentShortcut: 0,
      gameComplete: false
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({gameComplete: true})
    }, 2000);
  }

  attempt = (correct) => {
    if (correct) {
      this.setState({
        totalCorrect: this.state.totalCorrect + 1,
        currentShortcut: this.randomShortcut()
      })
    } else {
      this.setState({
        totalErrors: this.state.totalErrors + 1
      })
    }
  }

  render() {
    let gameCompleteComponent
    if (this.state.gameComplete) {
      gameCompleteComponent = <GameComplete />
    }
    return (
      <div>
        {gameCompleteComponent}
        <p>Welcome to the Game</p>
        <p>Total Errors: {this.state.totalErrors}</p>
        <p>Total Correct: {this.state.totalCorrect}</p>
        <Question 
          shortcut={this.state.shortcutSet[this.state.currentShortcut]}
          attempt={this.attempt}
        />
      </div>
    )
  }

  randomShortcut = () => {
    const shortcutSet = this.state.shortcutSet
    return Math.floor(Math.random() * shortcutSet.length)
  }
}

export default Game
