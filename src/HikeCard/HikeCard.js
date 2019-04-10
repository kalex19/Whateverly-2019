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

  handleFavoriteHikeButton = (event) => {
    //will have to save to component/LocalStorage  and toggle between favorite and not
    event.preventDefault();
    this.setState({
      favorite: !this.state.favorite
    });
  }

  handleVisitedTrails = (event) => {
    //will have to save to a component/Localstorage and toggle between visited and not
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
        <input className="moreBTn" type="button"value="More" onClick={this.createHikePopUp} />
    </section>
    )
  }
}