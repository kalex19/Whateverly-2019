import React from 'react';
import ReactDOM from 'react-dom';
import PopUpCard from '../HikeFilterButtons/HikeFilterButtons.js';
import { shallow } from 'enzyme';


describe('HikeFilterButtons', () => {
let wrapper

beforeEach(() => {
    wrapper = shallow(
        <HikeFilterButtons />
    )
});

it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
         filters: {
          type: null,
          difficulty: null,
          distance: null
        }
    })
});
})