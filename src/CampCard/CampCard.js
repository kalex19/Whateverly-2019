import React, {Component} from 'react';
import './CampCard.scss';
import Camping from '../Camping/Camping.js'

export default class CampCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className='campingCard'>
        <h2 className='campName'>{ this.props.filteredCampgrounds.name }</h2>
        <h3><span className='textLabel'>Location: </span>{ this.props.filteredCampgrounds.location }</h3>
        <h3><span className='textLabel'>Available Seasons: </span>{ this.props.filteredCampgrounds.season }</h3>
    </section>
    )
  }
}