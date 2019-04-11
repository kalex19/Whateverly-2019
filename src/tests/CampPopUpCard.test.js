import React from 'react';
import ReactDOM from 'react-dom';
import PopUpCard from '../CampPopUpCard/CampPopUpCard.js';
import { shallow } from 'enzyme';


describe('PopUpCard', () => {
let wrapper

beforeEach(() => {
    wrapper = shallow(
        <CampPopUpCard  />
    )
});

it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should have a default state', () => {
    expect(wrapper.state()).toEqual({

    })
});
})