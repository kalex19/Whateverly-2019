import React, {Component} from 'react';
import App from '../App/App.js';
import Styles from './CampFilterButtons.scss';

export default class CampFilterButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        camping: null,
        elevation: null,
        reservationAvailable: null,
      }
    }
  }

  allowsTents = (props) => {
    let tentCamp = this.props.filteredCampgrounds.filter(campground => campground.camping.includes("Tent"))
    this.props.filteredCampResults(tentCamp);
    return tentCamp;
  }

  allowsCars = (props) => {
    let carCamp = this.props.filteredCampgrounds.filter(campground => campground.camping.includes("Car"))
    this.props.filteredCampResults(carCamp);
    return carCamp;
  }

  allowsRVs = (props) => {
    let rvCamp = this.props.filteredCampgrounds.filter(campground => campground.camping.includes("RV"))
    this.props.filteredCampResults(rvCamp);
    return rvCamp;
  }

  isLess5000 = (props) => {
    let less5000Camp = this.props.filteredCampgrounds.filter(campground => campground['elevation'] <= 4999)
    this.state.updateFilter.push(...less5000Camp);
    return less5000Camp;
  }

  isLess9000 = (props) => {
    let less9000Camp = this.props.filteredCampgrounds.filter(campground => campground['elevation'] >= 5000 && campground['elevation']<= 8999)
    this.state.updateFilter.push(...less9000Camp);
    return less9000Camp;
  }

  isLess11000 = (props) => {
    let less11000Camp = this.props.filteredCampgrounds.filter(campground => campground['elevation'] >= 9000 && campground['elevation']<= 11000)
    this.state.updateFilter.push(...less11000Camp);
    return less11000Camp;
  }

  yesRes = (props) => {
    let yes = this.props.filteredCampgrounds.filter(campground => campground['reservation-available'] === true)
    this.state.updateFilter.push(...yes);
    return yes;
  }

  noRes = (props) => {
    let no = this.props.filteredCampgrounds.filter(campground => campground['reservation-available'] === false)
    this.state.updateFilter.push(...no);
    return no;
  }

  filter = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <section className='filterContainer'>
        <form>
          <h4 className="formHeader">Please pick one option for each category.</h4>
            <div className='filterSection'>
              <label>Camping Type:</label>
              <div className="filterBtn">
              <p>Tent</p><input type="radio" name="type" value="tent" onChange={this.allowsTents}/>
              </div>
              <div className="filterBtn">
              <p>Car</p><input type="radio" name="type" value="car" onChange={this.allowsCars}/>
              </div>
              <div
              className="filterBtn">
              <p>RV</p><input type="radio" name="type" value="rv" onChange={this.allowsRVs}/>
              </div>
            </div>
            <div className='filterSection'>
              <label>Elevation:</label>
              <div className="filterBtn">
              <p>5000 feet</p><input type="radio" name="elevation" value="less5000" onChange={this.isLess5000}/>
              </div>
              <div className="filterBtn">
              <p>5000-8999 feet</p><input type="radio" name="elevation" value="less9000" onChange={this.isLess9000}/>
              </div>
              <div className="filterBtn">
              <p>9000-11000 feet</p><input type="radio" name="elevation" value="less11000" onChange={this.isLess11000}/>
              </div>
            </div>
            <div className='filterSection'>
              <label>Take a reservation:</label>
              <div className="filterBtn">
                <p>Yes</p><input type="radio" name="reservation" value="Yes" onChange={this.yesRes}/>
                </div>
                <div className="filterBtn">
                <p>No</p><input type="radio" name="reservation" value="No" onChange={this.noRes}/>
                </div>
            </div>
          <input type="submit" className="filterSubmit" onClick={this.filter}/>
          <input type="reset" value="Reset" className="resetSubmit" onClick={this.reset}/>
        </form>  
      </section>
    )
  }
}
