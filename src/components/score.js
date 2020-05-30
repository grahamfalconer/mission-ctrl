import React, { Component } from 'react'

export class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      failuresLastTurn: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    
    if (props.failuresThisTurn > 0){
      return{
        failuresLastTurn: props.failuresThisTurn
      }
    }

    // when failites this turn = 0 then failures this turn needs to be rest once score has been updated
    if (props.failuresThisTurn === 0 && state.failuresLastTurn >= 3) {
      return {
        score: state.score + 0
      };
    }

    //correct 
    if (props.failuresThisTurn === 0 && state.failuresLastTurn === 2) {
      return {
        score: state.score + 1
      };
    }

    if (props.failuresThisTurn === 0 && state.failuresLastTurn === 1) {
      return {
        score: state.score + 3,
        failuresLastTurn: props.failuresThisTurn
      };
    }
    
    if (props.failuresThisTurn === 0 && props.numberOfCorrect > 0) {
      return {
        score: state.score + 5
      };  
    }

    // Return null to indicate no change to state.
    return null;
  }

  render() {
    return (
      <div>
        <p>Score: {this.state.score}</p>
      </div>
    )
  }
}

export default Score
