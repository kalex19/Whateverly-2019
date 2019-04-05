import React, {Component} from 'react';
import './Start.css';


export default class Start extends Component {
  constructor(props) {
    super(props);
      this.state= {
        startInputValue: ''
      }
    }

    selectCamping = (props) => {
      return this.props.campgrounds;
    }

    selectHiking = (props) => {
       return this.props.allTrails
    }

    grabLocation = (event) => {
      this.setState({
        startInputValue: event.target.value
      })
    }

    startSubmitLocation = (event, props) => {
      event.preventDefault();
      this.setState({ 
        startInputValue: this.grabLocation })
    }

  render () {
    return (
      <section className='startWrapper'>
        <h1 className="header">XCO</h1>
        <div className='buttonHolder'>
          <input type="button" className="campStartBtn"  value="Camping" onClick={this.selectCamping} />
          <input type="button" className="hikeStartBtn" value="Hiking" onClick={this.selectHiking} />
        </div>
        <form onSubmit={this.startSubmitLocation} className=' startLocationSearch'>
          <input type="text" className="startLocationInput" placeholder="Please Enter a Location..." value= {this.state.startInputValue} onChange={this.grabLocation} />
          <input type="submit" className="startSubmitBtn" value="Submit" />
        </form>
      </section>
    )
  }
}


