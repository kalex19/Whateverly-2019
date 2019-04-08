import React, {Component} from 'react';
import './CampCard.scss';
import Camping from '../Camping/Camping.js'

export default class CampCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section>
      <h2>{ this.props.filteredCampgrounds.name }</h2>
      <h3>{ this.props.filteredCampgrounds.location }</h3>
      <h3>{ this.props.filteredCampgrounds.season }</h3>
    </section>
    )
  }
}