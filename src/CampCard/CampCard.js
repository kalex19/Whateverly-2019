import React, {Component} from 'react';
import './CampCard.scss';
import CampingFilter from '../CampingFilter/CampingFilter.js';
import App from '../App/App.js';
import CampPopUpCard from '../CampPopUpCard/CampPopUpCard.js';

export default class CampCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      visited: false,
      deleted: false,
      popUp: false
    }
  }
  createCampPopUp = () => {
    this.setState({
      popUp: true
    })
    console.log(this.state);
  }

  handleDeleteCampCard() {
    //create another method that will have the logic to delete the card
    //potentially have on the app and parse down
    //if this button is clicked remove from localStorage/component that holds it in local storage and remove with that component 
    this.setState({
      deleted: true
    })
  }

  handleFavoriteCamp = (event) => {
    //will have to save to component/LocalStorage  and toggle between favorite and not
    event.preventDefault();
    this.setState({
      favorite: !this.state.favorite
    });
  }

  handleVisitedCamp = (event) => {
    //will have to save to a component/Localstorage and toggle between visited and not
    event.preventDefault();
    this.setState({
      visited: !this.state.visited
    })
  }

  componentDidUpdate = () => {
    localStorage.setItem(this.props.filteredCampgrounds.name, JSON.stringify(this.state));
  }

  componentDidMount = () => {
    this.setState({
      favorite: JSON.parse(localStorage.getItem(this.props.filteredCampgrounds.name)) || false,
      visited: JSON.parse(localStorage.getItem(this.props.filteredCampgrounds.name)) || false
    })
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
          <button className='favoriteButton' onClick={this.handleFavoriteCamp}>  <i className="fas fa-heart"></i></button>
          <button className='visitedButton' onClick={this.handleVisitedCamp}> <i className="fas fa-check"></i></button>
          <button className='deleteButton' onClick={this.handleDeleteCampCard}><i className="far fa-trash-alt"></i></button>
        </div>
        <h3><span className='textLabel'>Location: </span>{ this.props.filteredCampgrounds.location }</h3>
        <h3><span className='textLabel'>Available Seasons: </span>{ this.props.filteredCampgrounds.season }</h3>
        <input className="moreBTn" type="button"value="More" onClick={this.createCampPopUp} />
        {campPopUp}
    </section>
    )
  }
}