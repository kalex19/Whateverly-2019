import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../Start.js';
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

describe('Start', () => {
let wrapper 

beforeEach(() => {
    wrapper.shallow(
        // <Start startInputValue = ''/>
    )
});
it('should have an initial input value of an empty string', () => {
    expect(startInputValue).toEqual('');
});

it('should be able to grab the user location based on submission, () => {
    expect(startInputValue).toEqual('');
    grabLocation();
    expect(startInputValue).toEqual{ mockInput };
});

// it('should be able to submit a user location based on submission', () => {

// });

it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})

})

//Need to review testing and test out based on functionality with App