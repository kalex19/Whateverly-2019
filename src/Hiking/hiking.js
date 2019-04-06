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