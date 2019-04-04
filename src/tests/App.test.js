import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';

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

describe('App', () => {
let wrapper;

beforeEach(() => {
    wrapper=shallow(
        <App />
    )
});

it('should make the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});


})