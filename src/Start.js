import React, {Component} from 'react';
import './Start.css';


export default class Start extends Component {
  constructor(props) {
    super(props);
      this.state= {
        startInputValue: '',
      }
    }

   selectCamping = (event) => {
      event.preventDefault();
      return this.props.campground
    }

     selectHiking = (event) => {
      event.preventDefault();
       return this.props.trail
    }

     grabLocation = (event) => {
      this.setState({
        startInputValue: event.target.value
      })
    }

     startSubmitLocation = (event) => {
      event.preventDefault();
      this.props.setLocation(this.setState.startInputValue);
    }

  render () {
    return (
      <section>
        <input type="button" className="campStartBtn visibility"  value="Camping" onClick={this.selectCamping} />
        <input type="button" className="hikeStartBtn visibility" value="Hiking" onClick={this.selectHiking} />
        <form onSubmit={this.startSubmitLocation} className=' startLocationSearch searchVisibility'>
          <label>Search:</label>
          <input type="text" className="startLocationInput" placeholder="Please choose a Location" value= {this.state.startInputValue} onChange={this.grabLocation} />
          <input type="submit" className="startSubmitBtn" value="Submit" />
        </form>
      </section>
    )
  }
}

