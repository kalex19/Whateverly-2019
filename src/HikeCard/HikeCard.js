import React, {Component} from 'react';
import './HikeCard.scss';
import HikingFilter from '../HikingFilter/HikingFilter.js';
import App from '../App/App.js';
import HikePopUpCard from '../HikePopUpCard/HikePopUpCard.js';

export default class HikeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      visited: false,
      popUp: false,
    }
  }

  handleDeleteHikeCard = (e) => {
    e.preventDefault();
    e.target.closest('section').remove(); 
  }

  handleFavoriteHikeButton = (event) => {
    event.preventDefault();
    this.setState({
      favorite: !this.state.favorite
    });
  }

  handleVisitedTrails = (event) => {
    event.preventDefault();
    this.setState({
      visited: !this.state.visited
    })
  }

  componentDidUpdate = () => {
    localStorage.setItem(this.props.filteredHiking.name, JSON.stringify(this.state));
  }

  componentDidMount = () => {
    this.setState({
      favorite: JSON.parse(localStorage.getItem(this.props.filteredHiking.name)) || false,
      visited: JSON.parse(localStorage.getItem(this.props.filteredHiking.name)) || false
    })
  }

  render () {
    let HikePopUp;
    if(this.state.popUp === true) {
      HikePopUp = <HikePopUpCard 
      allCampgrounds = {this.props.allCampgrounds}
      assignedUserCampInput = {this.props.userHikeInputValue} />
    }

    return (
      <section className='hikingCard'>
      <div>
      <h2 className='hikeName'>{ this.props.filteredHiking.name }</h2>
      <button className='favoriteButton' onClick={this.handleFavoriteHikeButton}><i className={this.state.favorite ? "far fa-heart" : "fas fa-heart"}></i></button>
      <button className='visitedButton' onClick={this.handleVisitedTrails}><i className={this.state.visited ? "far fa-check-square" : "fas fa-check-square"}></i></button>
      <button className='deleteButton' onClick={this.handleDeleteHikeCard}><i className="far fa-trash-alt"></i></button>
      </div>
      <h3 className='textLabel'>Location: { this.props.filteredHiking.location }</h3>
      <h3 className='textLabel'>Trail Length: {  this.props.filteredHiking.length } miles</h3>
      <input className="moreBTn" type="button"value="More" onClick={this.createHikePopUp} />
      </section>
      )
    }
  }