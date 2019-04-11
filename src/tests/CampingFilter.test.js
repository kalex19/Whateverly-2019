import React from 'react';
import ReactDom from 'react-dom';
import CampingFilter from '../CampingFilter/CampingFilter.js';
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

describe('CampingFilter', () => {
let wrapper

beforeEach(() => {
    wrapper = shallow(
        <CampingFilter filteredCampgrounds={mockCamping}/>
    )
});

// it('should mock the snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
// });

it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
    })
});

})