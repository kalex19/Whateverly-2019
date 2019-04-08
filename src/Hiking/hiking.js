import React, {Component} from 'react';
import './Hiking.scss';

export default class Hiking extends Component {
  constructor(props) {
    super(props);

  }



     render () {

         return (
          <section>
            <h2>{ this.props.filteredHiking[0].name }</h2>
            <h3>{ this.props.filteredHiking[0].location }</h3>
            <h3>{  this.props.filteredHiking[0].length } miles</h3>
          </section>
         )
     }
}



