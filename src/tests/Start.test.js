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

describe('Start', () => {
let wrapper 

beforeEach(() => {
    wrapper.shallow(
        <Start />
    )
});

it('should mock snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})

})