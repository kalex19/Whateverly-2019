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
      let loopTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Loop');
      this.props.filteredHikeResults(loopTrails);
      return loopTrails;
    }

    findOutBack = (props) => {
      let outBackTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Out and Back');
      this.props.filteredHikeResults(outBackTrails);
      return outBackTrails;
    }

    findPoint = (props) => {
      let pointTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Point to Point');
      this.props.filteredHikeResults(pointTrails);
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
        <h4 className="formHeader">Please pick one option for each category.</h4>
          <div className="filterSection">
          <label>Trail Type:</label>
          <div className="filterBtn">
            <p>Loop</p><input type="radio" name="type" value="loop" onChange={this.findLoop}/>
          </div>
          <div className="filterBtn">
            <p>Out and Back</p><input type="radio" name="type" value="outBack" onChange={this.findOutBack}/>
          </div>
          <div className="filterBtn">
            <p>Point-to-Point</p><input type="radio" name="type" value="point" onChange={this.findPoint}/>
          </div>
          </div>
          <div className="filterSection">
            <label>Difficulty:</label>
            <div className="filterBtn">
            <p>Easy</p><input type="radio" name="difficulty" value="easy" onChange={this.isEasy}/>
            </div>
            <div className="filterBtn">
            <p>Moderate</p><input type="radio" name="difficulty" value="mod" onChange={this.isMod}/>
            </div>
            <div className="filterBtn">
            <p>Difficult</p><input type="radio" name="difficulty" value="diff" onChange={this.isDiff}/>
            </div>
          </div>
          <div className="filterSection">
            <label>Elevation Gain:</label>
            <div className="filterBtn">
              <p>0-1999 feet</p><input type="radio" name="gain" value="less2000" onChange={this.isLess2000}/>
              </div>
              <div className="filterBtn">
              <p>2000-4999 feet</p><input type="radio" name="gain" value="less5000" onChange={this.isLess5000}/>
              </div>
              <div className="filterBtn">
              <p>5000-8000 feet</p><input type="radio" name="gain" value="less8000" onChange={this.isLess8000}/>
              </div>
          </div>
          <input type="submit" className="filterSubmit" onClick={this.filter}/>
          <input type="reset" value="Reset" className="resetSubmit" onClick={this.reset}/>
          </form>
      </section>
    )
  }
}
