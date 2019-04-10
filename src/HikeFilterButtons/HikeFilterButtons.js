import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './HikeFilterButtons.scss';

export default class HikeFilterButtons extends Component {
  constructor(props) {
    super(props);
      this.state = {
        // loop: false,
        // outBack: false,
        // point: false,
        // easy: false,
        // mod: false,
        // diff: false,
        // less2000: false,
        // less5000: false,
        // less8000: false,
      }
    }

    //new Method, edit state within App

    findLoop = (props) => {
      let loopTrails = this.props.filteredHiking.filter(trail => trail['type'] === 'Loop')
      return loopTrails;
    }

    findOutBack = () => {
      this.setState({
        outBack: !this.state.outBack
      });
    }

    findPoint = () => {
      this.setState({
        point: !this.state.point
      });
    }

    isEasy = () => {
      this.setState({
        easy: !this.state.easy
      });
    }

    isMod = () => {
      this.setState({
        mod: !this.state.mod
      });
    }

    isDiff = () => {
      this.setState({
        diff: !this.state.diff
      });
    }

    isLess2000 = () => {
      this.setState({
        less2000: !this.state.less2000
      });
    }

    isLess5000 = () => {
      this.setState({
        less5000: !this.state.less5000
      });
    }

    isLess8000 = () => {
      this.setState({
        less8000: !this.state.less8000
      });
    }

  render() {
    return (
      <section className='filterContainer'>
        <h4>Please pick one option for each category.</h4>
          <div>
          <label>Trail Type:</label>
            <input type="radio" name="type" value="loop" onChange={this.findLoop}/><p>Loop</p>
            <input type="radio" name="type" value="outBack" onChange={this.findOutBack}/><p>Out and Back</p>
            <input type="radio" name="type" value="point" onChange={this.findPoint}/><p>Point-to-Point</p>
          </div>
          <div>
            <label>Difficulty:</label>
            <input type="radio" name="difficulty" value="easy" onChange={this.isEasy}/><p>Easy</p>
            <input type="radio" name="difficulty" value="mod" onChange={this.isMod}/><p>Moderate</p>
            <input type="radio" name="difficulty" value="diff" onChange={this.isDiff}/><p>Difficult</p>
          </div>
          <div>
            <label>Elevation Gain:</label>
              <input type="radio" name="gain" value="less2000" onChange={this.isLess2000}/><p>0-2000 feet</p>
              <input type="radio" name="gain" value="less5000" onChange={this.isLess5000}/><p>2000-4999 feet</p>
              <input type="radio" name="gain" value="less8000" onChange={this.isLess8000}/><p>5000-8000 feet</p>
          </div>
          <input type="submit" className="filterSubmit" onClick={this.filter}/>
      </section>
    )
  }
}
