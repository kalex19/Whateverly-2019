import React, {Component} from 'react';
import App from './App.js';

class Start extends App {
  constructor() {
    super();
      this.state= {
        startInputValue: ''
        //may need state for selected hiking/camping
      }

    //Method:
    //Toggle Search

    //Method:
    //Display Main Page

    //Method:
    //Display Cards
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
    return (
      <React.Fragment>
        <input type="button" className="campStartBtn" value="Camping" onClick={selectCamping} />
        <input type="button" className="hikeStartBtn" value="Hiking" onClick={selectHiking} />
        <form onSubmit={this.startSubmitLocation}>
          <label>Search:</label>
          <input type="text" className="startLocationInput" placeholder="Please choose a Location" value= {this.state.startInputValue} onChange={this.grabLocation} />
          <input type="submit" className="startSubmitBtn" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default Start;