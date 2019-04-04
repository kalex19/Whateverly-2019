import React, {Component} from 'react';
import App from './App.js';
import './Start.css';

class Start extends App {
  constructor() {
    super();
      this.state= {
        startInputValue: '',
        shown: true
        //may need state for selected hiking/camping
      }

    displayMainPage = () => {
      this.setState({
        shown: !this.state.shown
      })
    }

    selectCamping = (event) => {
      event.preventDefault();
      this.props.Dataset.campground
    },

    selectHiking = (event) => {
      event.preventDefault();
      this.props.Dataset.trail
    },

    grabLocation = (event) => {
      this.setState({
        startInputValue: event.target.value
      })
    },

    startSubmitLocation = (event) => {
      event.preventDefault();
      this.props.setLocation(this.setState.startInputValue);
    }
    ///This will be referencing App Location
  }

  render {

    let shown = {
      display: this.state.shown ? visible : hidden
    };

    let hidden = {
      display: this.state.shown ? hidden : visible
    };

    return (
      <React.Fragment className="startWrapper" style={shown}>
        <input type="button" className="campStartBtn visibility"  value="Camping" onClick={selectCamping} />
        //onClick={this.toggle.bind(this)}
        <input type="button" className="hikeStartBtn visibility" value="Hiking" onClick={selectHiking} />
        <form onSubmit={this.startSubmitLocation} className=' startLocationSearch searchVisibility' style={ hidden } >
          <label>Search:</label>
          <input type="text" className="startLocationInput" placeholder="Please choose a Location" value= {this.state.startInputValue} onChange={this.grabLocation} />
          <input type="submit" className="startSubmitBtn" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default Start;