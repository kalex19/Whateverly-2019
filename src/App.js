import React, {Component} from 'react';
import Data from './Data';
//import data

class App extends Component {
  constructor() {
    super();

    //const data =  passing in datafiles (data object)
    //declare state
    //can we use two states? Or need to combo dataset?
    //states for start
    //states for card
    //states for filter buttons
    //states for search
    //states for storagebuttons
    //ie: <Card entry={this.state.entry}/>

    //method:
    //toggle css hidden class/z-index

  }
  render() {
    return (
      <div className='startButton'>
        <button className='campingButton'>Camping</button>
        <button className='hikingButton'>Hiking</button>
      //upon click remove buttons and change img based on click
      //append main page with cards and filter buttons
      </div>
    )
  }
}

export default App;