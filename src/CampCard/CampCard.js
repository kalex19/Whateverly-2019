import React, {Component} from 'react';
import './CampCard.scss';
import CampingFilter from '../CampingFilter/CampingFilter.js';
import App from '../App/App.js';
import CampPopUpCard from '../CampPopUpCard/CampPopUpCard.js';

export default class CampCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: false
    }
  }
  createCampPopUp = () => {
    this.setState({
      popUp: true
    })
    console.log(this.state);
  }

  render (props) {
    let campPopUp;
    if(this.state.popUp === true) {
      campPopUp = <CampPopUpCard 
      allTrails = {this.props.allTrails}
      assignedUserCampInput = {this.props.userCampInputValue} />
    }


    return (
      <section className='campingCard'>
        <div>
          <h2 className='campName'>{ this.props.filteredCampgrounds.name }</h2>
          <button className='favoriteButton'>Favorite</button>
          <button className='vistedButton'>Visited</button>
          <button className='deleteButton'>Delete</button>
        </div>
        <h3><span className='textLabel'>Location: </span>{ this.props.filteredCampgrounds.location }</h3>
        <h3><span className='textLabel'>Available Seasons: </span>{ this.props.filteredCampgrounds.season }</h3>
        <input type="button" value="More" onClick={this.createCampPopUp} />
        {campPopUp}
    </section>
    )
  }
}