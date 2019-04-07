import React, {Component} from 'react';
import App from './App.js';

class StorageButtons extends App {
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
  render {
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

export default StorageButton;