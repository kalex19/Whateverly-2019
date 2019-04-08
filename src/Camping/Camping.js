import React, {Component} from 'react';
import './Camping.scss';
import CampCard from '../CampCard/CampCard.js';

export default class Camping extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    let Card = this.props.filteredCampgrounds.map((campground) => {
      return (<CampCard 
        filteredCampgrounds = {campground}
        key = {campground.name}
      />)

    })
    
    return (
      <div>{ Card }</div>
    )
  }
}
