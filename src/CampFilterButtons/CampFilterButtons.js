import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './CampFilterButtons.scss';

export default class CampFilterButtons extends Component {
  constructor(props) {
    super(props);
    //CAMPING
    //Reservations available
    //camping
    //season
    //activities
  
    //methods:
    //display/filter cards

  }
  render() {
    return (
      <section className='filterContainer'>
        <div className='campingFilters'>
          <div className='campingTypeFilter'>
            <h4>Please pick one option for each category.</h4>
            <label>Camping Type:</label>
            <button type='checkbox'>Tent</button>
            <button type='checkbox'>Car</button>
            <button type='checkbox'>RV</button>
          </div>
          <div className='elevationFilter'>
            <label>Elevation:</label>
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
      </section>
    )
  }
}
