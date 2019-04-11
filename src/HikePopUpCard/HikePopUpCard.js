import React, {Component} from 'react';
import HikeCard from '../HikeCard/HikeCard.js';
import './HikePopUpCard.scss';

export default class HikePopUpCard extends Component {
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