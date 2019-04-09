import React, {Component} from 'react';
import './App.scss';
import Start from '../Start/Start.js';
import Camping from '../Camping/Camping.js';
import Hiking from '../Hiking/Hiking.js';
import CampFilterButtons from '../ CampFilterButtons/CampFilterButtons.js';
import HikeFilterButtons from '../ HikeFilterButtons/HikeFilterButtons.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      allCampgrounds: [],
      allTrails: [],
      userCampInputValue: '',
      userHikeInputValue: '',
      camping: false,
      hiking: false,
      filteredCampgrounds: [],
      filteredHiking: []
    }
  }

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/b-coyle/camping')
      .then(response => response.json()) 
      .then(selectCamping => {
          this.setState({		    
            allCampgrounds: selectCamping.camping 
        });
      })
      .catch(error => console.log('Camping Error', error));
  
      fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/b-coyle/trails')
        .then(response => response.json()) 
        .then(selectHiking => {
          this.setState({			
            allTrails: selectHiking.trails 
        });	
      })
        .catch(error => console.log('Hiking Error', error)); 	 
   }

   assignCampingBoolean = () => {
    this.setState({
      camping: true
    })
   }

  checkCampingLocation = (userCampInputValue) => {
    let filteredCampgrounds = this.state.allCampgrounds.filter(campground => campground.location === userCampInputValue || campground["nearest-city"] === userCampInputValue)
    this.setState ({
      filteredCampgrounds: filteredCampgrounds
    })
  }

  checkHikingLocation = (userHikeInputValue) => {
    console.log('User Input Hike', userHikeInputValue);
    let filteredHiking = this.state.allTrails.filter(trail => trail.location === userHikeInputValue || trail["nearest-city"] === userHikeInputValue)
    this.setState ({
      filteredHiking: filteredHiking
    })
  }


   assignHikingBoolean = () => {
     this.setState({
       hiking: true
     })
  }

   assignUserCampInput = (startInputValue) => {
    this.setState ({
      userCampInputValue: startInputValue
    })
  }

  assignUserHikeInput = (startInputValue) => {
    this.setState ({
      userHikeInputValue: startInputValue
    })
  }
 
  render() {
    if(this.state.hiking === true) {
      <HikeFilterButtons 
      filteredHiking = {this.state.filteredHiking} />
    }

    let toggleCards;

    if(this.state.camping === true) {
       toggleCards =  <Camping
        allCampgrounds = {this.state.allCampgrounds}
        allTrails = {this.state.allTrails} 
        assignedUserCampInput = {this.state.userCampInputValue}
        filteredCampgrounds = {this.state.filteredCampgrounds}
   />
    } else if (this.state.hiking === true) {
        toggleCards = <Hiking
        allCampgrounds = {this.state.allCampgrounds}
        allTrails = {this.state.allTrails} 
        assignedUserHikeInput = {this.state.userHikeInputValue}
        filteredHiking = {this.state.filteredHiking}
    />
    }

    return (
      <div className='startScreen'>
       <Start
       allCampgrounds = {this.state.allCampgrounds}
       allTrails = {this.state.allTrails}
       userCampInput = {this.assignUserCampInput}
       userHikeInput = {this.assignUserHikeInput}
       campingBoolean = {this.assignCampingBoolean}
       hikingBoolean = {this.assignHikingBoolean}
       filteredCampgrounds = {this.checkCampingLocation}
       filteredHiking = {this.checkHikingLocation}
        />

      {toggleCards}
      </div>

    )
  }
}
