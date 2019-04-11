import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../Start/Start.js';
import { shallow } from 'enzyme';


const mockCamping = [
    {
    "name": "Glacier Basin Campground",
    "location": "Estes Park",
    "season": "May-Sept",
    "elevation": 8500,
    "camping": ["Tent", "Car", "RV"],
    "activities": ["Hiking", "Fishing", "Horseback Riding", "Wildlife"],
    "reservation-available": true,
    "nearest-city": null
      },
      {
    "name": "Grand Junction KOA",
    "location": "Grand Junction",
    "season": "All year",
    "elevation": 4600,
    "camping": ["Tent", "Car", "RV"],
    "activities": ["ATVing"],
    "reservation-available": true,
    "nearest-city": null
    }
]
const mockInput = 'Grand Junction';

const mockHandleChange = jest.fn();


describe('Start', () => {
let wrapper 

beforeEach(() => {
    wrapper = shallow(
        <Start />
    )
});
it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
        startInputValue: ''
    })
});

// it('should have an event listener for handle change', () => {
//     expect(mockHandleChange).toBeCalled()
// });

it('should have an event listener for handle click', () => {
    const mockClickCampingBtn = jest.fn();
    const wrapper = shallow(<Start onClick = {mockClickCampingBtn}/>)
    wrapper.find('input').hasClassName('campStartBtn').simulate('click');
    expect(mockClickCampingBtn).toHaveBeenCalled()
});

})

//Need to review testing and test out based on functionality with App