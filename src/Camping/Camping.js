import React, {Component} from 'react';
import './Camping.scss';

export default class Camping extends Component {
  constructor(props) {
    super(props);





  }

  render () {
    console.log('Filtered Campground', this.props.filteredCampgrounds[0])
    return (
      <section>
        <h2>{ this.props.filteredCampgrounds[0].name }</h2>
        <h3>{ this.props.filteredCampgrounds[0].location }</h3>
        <h3>{  this.props.filteredCampgrounds[0].season }</h3>
      </section>
    )
  }
}