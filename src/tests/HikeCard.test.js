import React from 'react';
import ReactDOM from 'react-dom';
import PopUpCard from '../HikeCard/HikeCard.js';
import { shallow } from 'enzyme';


describe('HikeCard', () => {
let wrapper

beforeEach(() => {
    wrapper = shallow(
        <HikeCard />
    )
});

it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
        favorite: false,
        visited: false,
        deleted: false,
    })
});
})