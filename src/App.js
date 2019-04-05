import React, {Component} from 'react';
import {camping, trails} from './Data.js';
import './App.css';
import Start from './Start.js';
// import Card from './Card.js';

const Dataset = camping.reduce((accum, campground) => {
  if(!accum[campground.location]) {
    let newData = accum[campground.location];
    let currentCampground = campground.location;

  let availCampgrounds = camping.filter(campground => {
      if(currentCampground === campground.location) {
          return campground;
      }
  });
  let availTrails = trails.filter(trail => {
      if(campground.location === trail.location) {
          return trail
      }
  });

  newData = {
      'campground': availCampgrounds,
      'trail': availTrails
      }
  }
return accum
}, {});

export default class App extends Component {
  constructor() {
    super();

    //const data =  passing in datafiles (data object)
    //declare state
    //can we use two states? Or need to combo dataset?
    //states for start
    //states for card
    //states for filter buttons
    //states for search
    //states for storagebuttons
    //ie: <Card entry={this.state.entry}/>

    //method:
    //toggle css hidden class/z-index

  }
  render() {
    return (
      <div className='startScreen'>
       <Start/>
      </div>
    )
  }
}
