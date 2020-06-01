
import React from 'react'
import Question from './question.js'
import { shallow, mount } from 'enzyme'

it('renders without crashing', () => {
  let mockAttempt = {
    attempt: function () {}
  }
  const mockShortcut = { name: "Copy", combo: ['c'] }
  shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt}/>)
})

xit('it will call attempt(true) if the correct keys are pressed', () => {
  let mockAttempt = {
    attempt: function () {}
  }
  jest.spyOn(mockAttempt, "attempt").mockImplementation(() => '')

  const mockShortcut = { name: "Copy", combo: ['c'] }
  
  const wrapper = shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt}/>)

  wrapper.find('div').simulate('keypress', {key: 'c'})

  expect(mockAttempt.attempt).toBeCalled();
})
