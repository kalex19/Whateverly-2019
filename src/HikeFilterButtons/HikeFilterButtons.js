import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './HikeFilterButtons.scss';

export default class HikeFilterButtons extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loop: false,
        outBack: false,
        point: false
      }
    //HIKING
    //length
    //elevation gain
    //difficulty
    //type

    //methods:
    //display/filter cards
    }

    findLoop = () => {
      this.setState({
        loop: !this.state.loop
      }); 
      console.log(this.state.loop);
    }

  render() {
    return (
      <section className='filterContainer'>
        <div className='hikingFilters'>
        <h4>Please pick one option for each category.</h4>
          <div>
          <label>Trail Type:</label>
            <button className="loop" onClick={this.findLoop}>Loop</button>
            <button className="outBack" onClick={this.findOutBack}>Out and Back</button>
            <button className="point" onClick={this.findPoint}>Point-to-Point</button>
          </div>
          <div>
            <label>Difficulty:</label>
            <button className="easy" onClick={this.changeElevationGain}>Easy</button>
            <button className="mod" onClick={this.changeElevationGain}>Moderate</button>
            <button className="diff" onClick={this.changeElevationGain}>Difficult</button>
          </div>
          <div>
            <label>Elevation Gain:</label>
              <button className="less2000" onClick={this.changeElevationGain}>>2000 feet</button>
              <button className="less5000" onClick={this.changeElevationGain}>2000-4999 feet</button>
              <button className="less8000" onClick={this.changeElevationGain}>5000-8000 feet</button>
          </div>
          <div></div>
        </div>
      </section>
    )
  }
}
