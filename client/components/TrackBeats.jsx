import React from 'react'
import { connect } from 'react-redux'
import BeatSelector from './BeatSelector'

class TrackBeats extends React.Component {
   
    state = {
        measures: 2,
        beatValue: 4,  
    }

    track = () => {
        let beat = this.state.measures * this.state.beatValue
        for (let b = 1; b <= beat; b++) {
            return <BeatSelector />
        }
    }

    render(){
        return(track())
    }

}
