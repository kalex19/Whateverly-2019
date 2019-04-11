import React, {Component} from 'react';
import HikeCard from '../HikeCard/HikeCard.js';
import './HikePopUpCards/HikePopUpCards.scss';

export default class HikePopUpCard extends Component {
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
  viewCampsites = () => {
    
  }

  render () {
    return (
      <section className='campingCard'>
        <div>
          <button className='favoriteButton'>Favorite</button>
          <button className='vistedButton'>Visited</button>
          <button className='deleteButton'>Delete</button>
          <h2 className='hikeName'>{ this.props.filteredTrails.name }</h2>
      </div>
      <h3><span className='textLabel'>Location: </span>{ this.props.filteredTrails.location }</h3>
      <h3><span className='textLabel'>Available Seasons: </span>{ this.props.filteredTrails.season }</h3>
      <h3><span className='textLabel'>Elevation: </span>{ this.props.filteredTrails.elevation }</h3>
      <h3><span className='textLabel'>Camping Type: </span>{ this.props.filteredTrails.type }</h3>
      <h3><span className='textLabel'>Activities: </span>{ this.props.filteredTrails.activities }</h3>
      <h3><span className='textLabel'>Reservation Available: </span>{ this.props.filteredTrails.reservation }</h3>
      <div>
        <input type="button" value="See Nearby Campsites" onClick={this.viewCampsites}/>
      </div>
    </section>
    )
  }
}