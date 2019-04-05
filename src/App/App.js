import React, {Component} from 'react';
// import {camping, trails} from '../Data/Data.js';
import './App.css';
import Start from '../Start/Start.js';
// import Card from './Card.js';


export default class App extends Component {
  constructor() {
    super();

    this.state ={ 
      allCampgrounds: null,
      allTrails: null
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
            allCampgrounds: this.campCleanUpData(selectCamping) 
        });
      })
      .catch(error => console.log('Camping Error', error));
  
      fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/b-coyle/trails')
        .then(response => response.json()) 
        .then(selectHiking => {
          this.setState({			
            allTrails: this.hikeCleanUpData(selectHiking) 
        });	
      })
        .catch(error => console.log('Hiking Error', error)); 	 
   }

  campCleanUpData(camping) {
    let allCampgrounds = camping.camping;
    return allCampgrounds;
  }

  hikeCleanUpData(trails) {
    let allTrails = trails.trails;
    return allTrails;
  }

  render() {
    return (
      <div className='startScreen'>
       <Start/>
      </div>
    )
  }
}
