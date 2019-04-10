import React, {Component} from 'react';
import './HikeCard.scss';
import HikingFilter from '../HikingFilter/HikingFilter.js';

export default class HikeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      visited: false,
      deleted: false
    }

  }

  handleDeleteHikeCard() {
    //create another method that will have the logic to delete the card
    //potentially have on the app and parse down
    //if this button is clicked remove from localStorage/component that holds it in local storage and remove with that component 
    this.setState({
      deleted: true
    })
  }

  handleFavoriteHikeButton =(event) => {
    //will have to save to component/LocalStorage  and toggle between favorite and not
    event.preventDefault();
    this.setState({
      favorite: true
    });
  }

  handleVisitedTrails = (event) => {
    //will have to save to a component/Localstorage and toggle between visited and not
    event.preventDefault();
    this.setState({
      visited: true
    })
  }

  render () {
    return (
      <section className='hikingCard'>
        <div>
          <h2 className='hikeName'>{ this.props.filteredHiking.name }</h2>
          <button className='favoriteButton' onClick={this.handleFavoriteHikeButton}>Favorite</button>
          <button className='visitedButton' onClick={this.handleVisitedTrails}>Visited</button>
          <button className='deleteButton' onClick={this.handleDeleteHikeCard}>Delete</button>
        </div>
        <h3 className='textLabel'>Location: { this.props.filteredHiking.location }</h3>
        <h3 className='textLabel'>Trail Length: {  this.props.filteredHiking.length } miles</h3>
        <input className="moreBTn" type="button"value="More" onClick={this.createHikePopUp} />
    </section>
    )
  }
}