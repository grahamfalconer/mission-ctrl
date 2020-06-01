import React from "react";
import Question from "./question.js";
import { shallow, mount } from "enzyme";

it("renders without crashing, taking a shortcut to render and attempt method prop", () => {
  let mockAttempt = {
    attempt: function () {},
  };
  const mockShortcut = { name: "Copy", combo: ["c"] };
  shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt} />);
});

const mockKeyDown = (key) => {
  return {
    preventDefault: function () {},
    repeat: false,
    key: key,
  };
};

const mockKeyUp = {
  preventDefault: function () {},
};

it("correct immediately calls attempt with score 5, incorrect 0", () => {
  const mock = {
    attempt: function () {},
  };
  jest.spyOn(mock, "attempt");

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("c"));
  instance.keyDown(mockKeyUp);

  expect(mock.attempt).toBeCalledWith(5, 0);
});

