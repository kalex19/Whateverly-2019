import React, {Component} from 'react';
import './HikeCard.scss';
import Hiking from '../Hiking/Hiking.js';

export default class HikeCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className='hikingCard'>
        <h2 className='hikeName'>{ this.props.filteredHiking.name }</h2>
        <h3 className='textLabel'>{ this.props.filteredHiking.location }</h3>
        <h3 className='textLabel'>{  this.props.filteredHiking.length } miles</h3>
    </section>
    )
  }
}