import React, {Component} from 'react';
import App from './App.js';

class Card extends App {
  constructor() {
    super();






    checkCampingLocation = (props) => {
      let filteredCampground = this.props.allCampgrounds.filter(campground => {
        if (campground.location === this.state.startInputValue) {
          return campground
        }
      })
    }

    checkHikingLocation = (props) => {
      let filteredHiking = this.props.allTrails.filter(trail => {
        if (trail.location === this.state.startInputValue) {
          return trail
        }
      })
    }
    //if camping:
    //name
    //location
    //season
    //if hiking:
    //trail name
    //location
    //length

    //method:
    //EL: favorite button
    //EL: visited button
    //EL: delete button
    //EL: more info button

    //method:
    //display popup

    //method:
    //save to local storage (info based on button pressed)

  }
  render {
    return (
      //div
      //create Popup Comp
    )
  }
}

export default Card;