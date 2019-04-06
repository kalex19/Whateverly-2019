import React, {Component} from 'react';
import './Start.css';


export default class Start extends Component {
  constructor(props) {
    super(props);
      this.state= {
        startInputValue: ''
      }
    }

    handleChange = (event) => {
      console.log('userinput')
      event.preventDefault();
      this.setState({
        startInputValue: event.target.value
      }) 
    }

    handleClickCampingBtn = (props) => {
      console.log('emily');
      this.props.assignUserCampInput(this.state.startInputValue);
    }

    handleClickHikingBtn = (props) => {
      console.log('bridgett');
      this.props.assignUserHikeInput(this.state.startInputValue);
    }

  
  render () {
    return (
      <section className='startWrapper'>
        <h1 className="header">XCO</h1>
        <section className='startLocationSearch'>
          <input type="text" className="startLocationInput" placeholder="Please Enter a Location..." value= {this.props.startInputValue} onChange={this.handleChange} />
          <div className='buttonHolder'>
          <input type="button" className="campStartBtn"  value='Camping' onClick={this.handleClickCampingBtn}  />
          <input type="button" className="hikeStartBtn" value='Hiking' onClick={this.handleClickHikingBtn} />
        </div>
        </section>
      </section>
    )
  }
}


