import React, {Component} from 'react';
import CampCard from '../CampCard/CampCard.js';

export default class CampPopUpCard extends Component {
  constructor() {
    super();
  }

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