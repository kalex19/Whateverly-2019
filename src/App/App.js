import React, {Component} from 'react';
import './App.scss';
import Start from '../Start/Start.js';
import CampingFilter from '../CampingFilter/CampingFilter.js';
import HikingFilter from '../HikingFilter/HikingFilter.js';
import CampFilterButtons from '../CampFilterButtons/CampFilterButtons.js';
import HikeFilterButtons from '../HikeFilterButtons/HikeFilterButtons.js';

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
      filteredHiking: [],
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

   filteredCampResults = (filteredCampResults) => {
    this.setState({
      filteredCampgrounds: filteredCampResults
    })
    this.assignCampingBoolean(filteredCampResults);
   }

    filteredHikeResults = (filteredHikeResults) => {
    this.setState({
      filteredHiking: filteredHikeResults
    })
    this.assignHikingBoolean(filteredHikeResults);
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

    let toggleCards;
    let toggleFilter;

    if(this.state.camping === true) {
       toggleCards =  <CampingFilter
        allCampgrounds = {this.state.allCampgrounds}
        allTrails = {this.state.allTrails} 
        assignedUserCampInput = {this.state.userCampInputValue}
        filteredCampgrounds = {this.state.filteredCampgrounds}

   />
        toggleFilter = <CampFilterButtons 
        filteredCampgrounds = {this.state.filteredCampgrounds}
          filteredCampResults = {this.filteredCampResults} />

    } else if (this.state.hiking === true) {
        toggleCards = <HikingFilter
        allCampgrounds = {this.state.allCampgrounds}
        allTrails = {this.state.allTrails} 
        assignedUserHikeInput = {this.state.userHikeInputValue}
        filteredHiking = {this.state.filteredHiking}
    />
      toggleFilter = <HikeFilterButtons 
      filteredHiking = {this.state.filteredHiking}
        filteredHikeResults = {this.filteredHikeResults} />
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
      {toggleFilter}
      </div>

    )
  }
}
