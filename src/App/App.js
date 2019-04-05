import React, {Component} from 'react';
// import {camping, trails} from '../Data/Data.js';
import './App.css';
import Start from '../Start/Start.js';
// import Card from './Card.js';


export default class App extends Component {
  constructor() {
    super();

    this.state ={ 
      camping:[],
      trail: []
    }
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
  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/b-coyle/camping')
      .then(response => response.json()) 
      .then(selectCamping => {
          this.setState({			    
            camping: this.cleanUpData(selectCamping) 
        });
      })
      .catch(error => console.log('Camping Error', error));
  
      fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/b-coyle/trails')
        .then(response => response.json()) 
        .then(selectHiking => {
          this.setState({			
            trail: this.cleanUpData(selectHiking) 
        });	
      })
        .catch(error => console.log('Hiking Error', error)); 	 
   }

   cleanUpData(campgrounds, trails) {
    let newData;
    const Dataset = campgrounds.reduce((accum, campground) => {
      if(!accum[campground.location]) {
        newData = accum[campground.location];
        console.log('Test newData', newData)
        let currentCampground = campground.location;
    
      let availCampgrounds = campgrounds.filter(campground => {
          if(currentCampground === campground.location) {
              return campground;
          }
      });
      let availTrails = trails.filter(trail => {
          if(campground.location === trail.location) {
              return trail;
          }
      });
    
      newData = {
          'campground': availCampgrounds,
          'trail': availTrails
          }
      }
    return accum
    }, {});
    console.log('Test Dataset', Dataset);
    return newData
   }

  render() {
    return (
      <div className='startScreen'>
       <Start/>
      </div>
    )
  }
}
