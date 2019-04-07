import React, {Component} from 'react';
import './Hiking.css';

export default class Hiking extends Component {
  constructor(props) {
    super(props);

  }

    checkCampingLocation = (props) => {
        console.log(this.props.userCampInputValue);
        let filteredCampground = this.props.allCampgrounds.filter(campground => {
          if (campground.location === this.state.userCampInputValue) {
            return campground
          }
        })
      }
  
      checkHikingLocation = (props) => {
        let filteredHiking = this.props.allTrails.filter(trail => {
          if (trail.location === this.state.userHikeInputValue) {
            return trail
          }
        })
      }

     render () {
         return (
            <p>Hike</p>
         )
     }
}



