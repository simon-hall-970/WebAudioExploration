import React from 'react'
import { connect } from 'react-redux'
import { updateTrackVolume } from '../../actions/tracks'

class TrackVolume extends React.Component {  

    volumeHandler = (evt) => {
        let trackId = this.props.track
        let value = evt.target.value/100
        this.props.dispatch(updateTrackVolume(trackId, value))
    }

    render () {
        return (
            <div className="volume track-volume">
                <input id="trackVolume" type="range" max="100" min="0" step='1' onChange={this.volumeHandler} />
                <span>Track Gain</span> 
            </div>
        )
    }
}

export default connect()(TrackVolume)