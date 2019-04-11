import React from 'react';
import ReactDOM from 'react-dom';
import CampCard from '../CampCard/CampCard.js';
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

describe('CampCard', () => {
let wrapper

beforeEach(() => {
    wrapper = shallow(
        <CampCard filteredCampgrounds={mockCamping} />
    )
});

// it('should mock the snapshot', () => {
//     expect(wrapper).toMatchSnapshot({mockCamping});
// });

it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
        favorite: false,
        visited: false,
        popUp: false
    })
});

})