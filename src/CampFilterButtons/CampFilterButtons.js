import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './CampFilterButtons.scss';

export default class CampFilterButtons extends Component {
  constructor(props) {
    super(props);

  }

  allowsTents = (props) => {
    let tentCamp = this.props.filteredCampgrounds.filter(campground => campground.camping.includes("Tent"))
    return tentCamp;
  }

  allowsCars = (props) => {
    let carCamp = this.props.filteredCampgrounds.filter(campground => campground.camping.includes("Car"))
    return carCamp;
  }

  allowsRVs = (props) => {
    let rvCamp = this.props.filteredCampgrounds.filter(campground => campground.camping.includes("RV"))
    return rvCamp;
  }

  isLess5000 = (props) => {
    let less5000Camp = this.props.filteredCampgrounds.filter(campground => campground['elevation'] <= 4999)
    return less5000Camp;
  }

  isLess9000 = (props) => {
    let less9000Camp = this.props.filteredCampgrounds.filter(campground => campground['elevation'] >= 5000 && campground['elevation']<= 8999)
    return less9000Camp;
  }

  isLess11000 = (props) => {
    let less11000Camp = this.props.filteredCampgrounds.filter(campground => campground['elevation'] >= 9000 && campground['elevation']<= 11000)
    return less11000Camp;
  }

  yesRes = (props) => {
    let yes = this.props.filteredCampgrounds.filter(campground => campground['reservation-available'] === true)
    return yes;
  }

  noRes = (props) => {
    let no = this.props.filteredCampgrounds.filter(campground => campground['reservation-available'] === false)
    return no;
  }

  render() {
    return (
      <section className='filterContainer'>
        <form>
          <h4>Please pick one option for each category.</h4>
            <div className='campingTypeFilter'>
              <label>Camping Type:</label>
              <p>Tent</p><input type="radio" name="type" value="tent" onChange={this.allowsTents}/>
              <p>Car</p><input type="radio" name="type" value="car" onChange={this.allowsCars}/>
              <p>RV</p><input type="radio" name="type" value="rv" onChange={this.allowsRVs}/>
            </div>
            <div className='elevationFilter'>
              <label>Elevation:</label>
              <p>5000 feet</p><input type="radio" name="elevation" value="less5000" onChange={this.isLess5000}/>
              <p>5000-8999 feet</p><input type="radio" name="elevation" value="less9000" onChange={this.isLess9000}/>
              <p>9000-11000 feet</p><input type="radio" name="elevation" value="less11000" onChange={this.isLess11000}/>
            </div>
            <div className='reservationFilter'>
              <label>Take a reservation:</label>
                <p>Yes</p><input type="radio" name="reservation" value="Yes" onChange={this.yesRes}/>
                <p>No</p><input type="radio" name="reservation" value="No" onChange={this.noRes}/>
            </div>
          <input type="submit" className="filterSubmit" onClick={this.filter}/>
          <input type="reset" value="Reset" className="resetSubmit" onClick={this.reset}/>
        </form>  
      </section>
    )
  }
}
