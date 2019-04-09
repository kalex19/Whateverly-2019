import React, {Component} from 'react';
import App from './App.js';

class FilterButtons extends App {
  constructor() {
    super();
    //CAMPING
    //Reservations available
    //camping
    //season
    //activities
    
    //HIKING
    //length
    //elevation gain
    //difficulty
    //type

    //methods:
    //display/filter cards

  }
  render {
    return (
      <section className='filterContainer'>
        <div className='campingFilters'>
          <div className='campingTypeFilter'>
            <label>Camping Type</label>
            <button type='checkbox'>Tent</button>
            <button type='checkbox'>Car</button>
            <button type='checkbox'>RV</button>
          </div>
          <div className='elevationFilter'>
            <button>>5000 feet</button>
            <button>5000-8999 feet</button>
            <button>9000-11000 feet</button>
          </div>
          <div className='reservationFilter'>
            <label>Take a reservation:</label>
              <button>Yes</button>
              <button>No</button>
          </div>
        </div>
        <div className='hikingFilters'>
          <div>
          <label>Trail Type</label>
            <button>Loop</button>
            <button>Out and Back</button>
            <button>Point-to-Point</button>
          </div>
          <div>
            <label>Difficulty</label>
            <button>Easy</button>
            <button>Moderate</button>
            <button>Difficult</button>
          </div>
          <div>
            <label>Elevation Gain</label>
              <button>>2000 feet</button>
              <button>2000-4999 feet</button>
              <button>5000-8000 feet</button>
          </div>
        </div>
      </section>
    )
  }
}

export default FilterButton;