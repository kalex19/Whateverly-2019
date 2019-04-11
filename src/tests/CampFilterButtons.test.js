import React from 'react';
import ReactDOM from 'react-dom';
import CampFilterButtons from '../CampFilterButtons/CampFilterButtons.js';
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

filteredCampgrounds={mockCamping}

describe('CampFilterButtons', () => {
let wrapper

beforeEach(() => {
    wrapper = shallow(
        <CampFilterButtons />
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