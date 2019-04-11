import React, {Component} from 'react';
import App from '../App/App.js';

export default class HikePopUpCard extends Component  {
  constructor() {
    super();
    

    //EL: favorite button to display (toggle)
    //EL: visited button to display (toggle)
    //EL: reset search button 

    //method:
    //display favorites
    
    //method:
    //display visited

    //method:
    //reset buttons in input fields
  }
  render () {
    return (
      <section>
        <input type='button' value='Favorite' />
        <input type='button' value='Visited' />
        <input type='button' value='Reset' />

      </section>
      //favorite

      //visited
      //reset search  
    )
  }
}
