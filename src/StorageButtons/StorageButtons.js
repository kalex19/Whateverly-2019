import React, {Component} from 'react';
import App from '../App/App.js';

export default class HikePopUpCard extends Component  {
  constructor() {
    super();
  }
  render () {
    return (
      <section>
        <input type='button' value='Favorite' />
        <input type='button' value='Visited' />
        <input type='button' value='Reset' />
      </section> 
    )
  }
}
