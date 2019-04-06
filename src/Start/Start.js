import React, {Component} from 'react';
import './Start.css';


export default class Start extends Component {
  constructor(props) {
    super(props);
      this.state= {
        startInputValue: ''
      }
    }

    selectCampingBtn = (props) => {
      this.checkCampingLocation(props);
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
      console.log('test',this.state.startInputValue.toUpperCase());
    }

    checkCampingLocation = (props) => {
      for(var i =0; i < this.props.allCampgrounds.length; i++){
        console.log('test 1', this.props.allCampgrounds[i].location.toUpperCase())
      }

      // this.props.allCampgrounds.filter((campground) => {
      //   if(this.state.startInputValue.toUpperCase() === this.props.allCampgrounds.location.toUpperCase()) {
      //     console.log('Hello!');
      //     return 'hello';
      //   }
      // })
    }

    // checkHikingLocation = (props) => {

    // }


  render () {
    return (
      <section className='startWrapper'>
        <h1 className="header">XCO</h1>
        <section className='startLocationSearch'>
          <input type="text" className="startLocationInput" placeholder="Please Enter a Location..." value= {this.props.startInputValue} onChange={this.grabLocation} />
          <div className='buttonHolder'>
          <input type="button" className="campStartBtn"  value="Camping" onClick={this.selectCampingBtn} />
          <input type="button" className="hikeStartBtn" value="Hiking" onClick={this.selectHikingBtn} />
        </div>
        </section>
      </section>
    )
  }
}


