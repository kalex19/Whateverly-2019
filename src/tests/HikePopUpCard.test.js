import React from 'react';
import ReactDom from 'react-dom';
import HikePopUpCard from '../HikePopUpCard/HikePopUpCard.js';
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

describe('HikePopUpCard', () => {
    let wrapper 
    
    beforeEach(() => {
        wrapper = shallow(
            <HikePopUpCard />
        )
    });
    
    it('should mock the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should contain (6) h3 elements', () => {
        expect(wrapper.find("h3").length).toBe(6)
    });
    
    
    })

