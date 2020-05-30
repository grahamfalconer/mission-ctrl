import React from 'react'
import Score from './score.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Score />)
})

it('gives a score of 0 on load', () => {
  const wrapper = shallow(<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  expect(wrapper).toContainReact(<p>Score: 0</p>)
})

describe('single correct answer tests', () => {

  it('gives  a score of 5 when correct straight away',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 5</p>)
  })

  it('gives  a score of 3 when correct the second time',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 3</p>)
  })

  it('gives  a score of 1 when correct the third time',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 2, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 1</p>)
  })

})

it('gives a score of 10 with two first time correct answers', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 1})
  wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 2})
  expect(wrapper).toContainReact(<p>Score: 10</p>)
})





