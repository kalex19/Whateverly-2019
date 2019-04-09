import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './HikeFilterButtons.scss';

export default class HikeFilterButtons extends Component {
  constructor(props) {
    super(props);
    
    //HIKING
    //length
    //elevation gain
    //difficulty
    //type

    //methods:
    //display/filter cards

  }
  render() {
    return (
      <section className='filterContainer'>
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
