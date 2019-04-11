import React, {Component} from 'react';
import './HikeCard.scss';
import HikingFilter from '../HikingFilter/HikingFilter.js';

export default class HikeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      visited: false,
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
    return (
      <section className='hikingCard'>
        <div>
          <h2 className='hikeName'>{ this.props.filteredHiking.name }</h2>
          <button className='favoriteButton' onClick={this.handleFavoriteHikeButton}><i className="fas fa-heart"></i></button>
          <button className='visitedButton' onClick={this.handleVisitedTrails}><i className="fas fa-check"></i></button>
          <button className='deleteButton' onClick={this.handleDeleteHikeCard}><i className="far fa-trash-alt"></i></button>
        </div>
        <h3 className='textLabel'>Location: { this.props.filteredHiking.location }</h3>
        <h3 className='textLabel'>Trail Length: {  this.props.filteredHiking.length } miles</h3>
        <ul className='hikeInfo'>
          <li><span className='textLabel'>Elevation Gain: </span>{this.props.filteredHiking['elevation-gain']} feet</li>
          <li><span className='textLabel'>Trail Type: </span>{this.props.filteredHiking.type}</li>
          <li><span className='textLabel'>Difficulty: </span>{this.props.filteredHiking.difficulty}</li>
        </ul>
        <input className="moreBTn" type="button"value="More" onClick={this.createHikePopUp} />
    </section>
    )
  }
}