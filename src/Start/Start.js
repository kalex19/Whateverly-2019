import React, {Component} from 'react';
import './Start.scss';


export default class Start extends Component {
  constructor(props) {
    super(props);
      this.state= {
        startInputValue: ''
      }
    }

    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        startInputValue: event.target.value
      }) 
    }

    handleClickCampingBtn = (props) => {
      this.props.userCampInput(this.state.startInputValue);
      this.props.filteredCampgrounds(this.state.startInputValue);
      this.props.campingBoolean();
    }

    handleClickHikingBtn = (props) => {
      this.props.userHikeInput(this.state.startInputValue);
      this.props.filteredHiking(this.state.startInputValue);
      this.props.hikingBoolean();
    }

  
  render () {
    return (
      <section className='startWrapper'>
        <h1 className="header">XCO</h1>
        <section className='startLocationSearch'>
          <input type="text" className="startLocationInput" placeholder="Please Enter a Location..." value= {this.state.startInputValue} onChange={this.handleChange} />
          <div className='buttonHolder'>
          <input type="button" className="campStartBtn"  value='Camping' onClick={this.handleClickCampingBtn}  />
          <input type="button" className="hikeStartBtn" value='Hiking' onClick={this.handleClickHikingBtn} />
        </div>
        </section>
      </section>
    )
  }
}


