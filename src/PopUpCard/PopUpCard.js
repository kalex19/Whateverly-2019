import React, {Component} from 'react';
import Card from './Card.js';

class PopUpCard extends Card {
  constructor() {
    super();
    //camping: all information ex. nearest city
    //hiking: all info

    //will inherit from card
    //Two Options:
      //Option One:
      //EL: Show message "this many hiking/camping trails near you" that is clickable
        //if clicked, shows all camping information and hiking cards right off the bat
      //Option Two:
      //EL: Click button for more info
        //Displays pop-up
        //Another button with additional hiking/camping info, show nearby hikes/campsites

  }
  render {
    return (
    //CAMPSITE
    //Name
    //location
    //elevation (possible warning)
    //season
    //type
    //activities
    //reservation available

    //HIKING
    //name
    //location
    //elevation gain
    //length
    //difficulty
    //type
    )
  }
}

export default PopUpCard;