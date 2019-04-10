import React, {Component} from 'react';
import CampCard from '../CampCard/CampCard.js';

export default class CampPopUpCard extends Component {
  constructor() {
    super();
    //camping: all information ex. nearest city
    //hiking: all info

    //will inherit from card
    //Two Options:
      //Option One:
      //EL: Show message "this many hiking/camping trails near you" that is clickable
        //if clicked, shows all camping information and hiking cards right off the bat
      //Option Two:
      //EL: Click button for more info
        //Displays pop-up
        //Another button with additional hiking/camping info, show nearby hikes/campsites

  }
  viewTrails = () => {

  }
//filteredCampgrounds will not be passed through, just work with object
//need to access each property on object (how?)
//need to filter through allTrails using user location input
//place all on DOM
//Does this need to be another component
//Look up, card popping up with z-index (if needed)
//Build out hiking cards

  render () {
    return (
      <section className='campingCard'>
      <div>
        <button className='favoriteButton'>Favorite</button>
        <button className='vistedButton'>Visited</button>
        <button className='deleteButton'>Delete</button>
        <h2 className='campName'>{ this.props.filteredCampgrounds.name }</h2>
      </div>
      <h3><span className='textLabel'>Location: </span>{ this.props.filteredCampgrounds.location }</h3>
      <h3><span className='textLabel'>Available Seasons: </span>{ this.props.filteredCampgrounds.season }</h3>
      <h3><span className='textLabel'>Elevation: </span>{ this.props.filteredCampgrounds.elevation }</h3>
      <h3><span className='textLabel'>Camping Type: </span>{ this.props.filteredCampgrounds.type }</h3>
      <h3><span className='textLabel'>Activities: </span>{ this.props.filteredCampgrounds.activities }</h3>
      <h3><span className='textLabel'>Reservation Available: </span>{ this.props.filteredCampgrounds.reservation }</h3>
      <div>
        <input type="button" value="See Nearby Hiking Trails" onClick={this.viewTrails}/>
      </div>
  </section>
    )
  }
}