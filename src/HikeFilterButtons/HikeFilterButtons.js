import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './HikeFilterButtons.scss';

export default class HikeFilterButtons extends Component {
  constructor(props) {
    super(props);
      this.state = {
      }
    }

    findLoop = (props) => {
      let loopTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Loop')
      return loopTrails;
    }

    findOutBack = (props) => {
      let outBackTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Out and back')
      return outBackTrails;
    }

    findPoint = (props) => {
      let pointTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Point to Point')
      return pointTrails;
    }

    isEasy = (props) => {
      let easyTrails = this.props.filteredHiking.filter(trail => trail['difficulty'] === 'Easy')
      return easyTrails;
    }

    isMod = (props) => {
      let modTrails = this.props.filteredHiking.filter(trail => trail['difficulty'] === 'Moderate')
      return modTrails;
    }

    isDiff = (props) => {
      let diffTrails = this.props.filteredHiking.filter(trail => trail['difficulty'] === 'Difficult')
      return diffTrails;
    }

    isLess2000 = (props) => {
      let less2000Trails = this.props.filteredHiking.filter(trail => trail['elevation-gain'] >= 1999)
      return less2000Trails;
    }

    isLess5000 = (props) => {
      let less5000Trails = this.props.filteredHiking.filter(trail => trail['elevation-gain'] >= 2000 && trail['elevation-gain']<= 4999)
      return less5000Trails;
    }

    isLess8000 = (props) => {
      let less8000Trails = this.props.filteredHiking.filter(trail => trail['elevation-gain'] >= 5000 && trail['elevation-gain']<= 8000)
      return less8000Trails;
    }

  render() {
    return (
      <section className='filterContainer'>
      <form>
        <h4>Please pick one option for each category.</h4>
          <div>
          <label>Trail Type:</label>
            <p>Loop</p><input type="radio" name="type" value="loop" onChange={this.findLoop}/>
            <p>Out and Back</p><input type="radio" name="type" value="outBack" onChange={this.findOutBack}/>
            <p>Point-to-Point</p><input type="radio" name="type" value="point" onChange={this.findPoint}/>
          </div>
          <div>
            <label>Difficulty:</label>
            <p>Easy</p><input type="radio" name="difficulty" value="easy" onChange={this.isEasy}/>
            <p>Moderate</p><input type="radio" name="difficulty" value="mod" onChange={this.isMod}/>
            <p>Difficult</p><input type="radio" name="difficulty" value="diff" onChange={this.isDiff}/>
          </div>
          <div>
            <label>Elevation Gain:</label>
              <p>0-1999 feet</p><input type="radio" name="gain" value="less2000" onChange={this.isLess2000}/>
              <p>2000-4999 feet</p><input type="radio" name="gain" value="less5000" onChange={this.isLess5000}/>
              <p>5000-8000 feet</p><input type="radio" name="gain" value="less8000" onChange={this.isLess8000}/>
          </div>
          <input type="submit" className="filterSubmit" onClick={this.filter}/>
          <input type="reset" value="Reset" className="resetSubmit" onClick={this.reset}/>
          </form>
      </section>
    )
  }
}
