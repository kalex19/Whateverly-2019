import React, {Component} from 'react';
import './Start.css';


export default class Start extends Component {
  constructor(props) {
    super(props);
      this.state= {
        startInputValue: '',
        hovered: false
      }
    }

    selectCampingBtn = (props) => {
      this.checkCampingLocation(props);
      console.log('Emily', this.props.allCampgrounds);
      return this.props.campgrounds;
    }

    selectHikingBtn = (props) => {
      this.checkHikingLocation(props);
       return this.props.allTrails
    }

    grabLocation = (event) => {
      event.preventDefault();
      this.setState({
        startInputValue: event.target.value
      })
    }

    checkCampingLocation = (props) => {
      let filteredCampground = this.props.allCampgrounds.filter(campground => {
        if (campground.location === this.state.startInputValue) {
          return campground
        }
      })
    }

    checkHikingLocation = (props) => {
      let filteredHiking = this.props.allTrails.filter(trail => {
        if (trail.location === this.state.startInputValue) {
          return trail
        }
      })
    }

  //   cancelHover = () => {
  //       this.setState ({
  //         hovered: false
  //       })
  //   }

  //   setHover = () => {
  //     this.setState ({
  //       hovered: true
  //     })
  // }


  render () {
    return (
      <section className='startWrapper'>
        <h1 className="header">XCO</h1>
        <section className='startLocationSearch'>
          <input type="text" className="startLocationInput" placeholder="Please Enter a Location..." value= {this.props.startInputValue} onChange={this.grabLocation} />
          <div className='buttonHolder'>
          <input type="button" className="campStartBtn"  value='Camping' onClick={this.selectCampingBtn}  onMouseOver={this.setHover} onMouseOut={this.cancelHover} />
          <input type="button" className="hikeStartBtn" value='Hiking' onClick={this.selectHikingBtn} onMouseOver={this.setHover} onMouseOut={this.cancelHover} />
        </div>
        </section>
      </section>
    )
  }
}


