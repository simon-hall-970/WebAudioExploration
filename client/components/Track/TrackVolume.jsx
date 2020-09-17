import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { updateTrackVolume } from '../../actions/tracks'

class TrackVolume extends React.Component {  

    volumeHandler = (evt) => {
        let trackId = this.props.track
        let value = parseInt(evt.target.value, 10)
        this.props.dispatch(updateTrackVolume(trackId, value))
    }

    render () {
        return (
            <div className="track-vol-wrapper">
                {/* <FontAwesomeIcon className="track-volume-icon" icon={faVolumeUp} /> */}
                <input id="track-volume" className="volume" type="range" max="100" min="0" step='1' onChange={this.volumeHandler} />               
            </div>
        )
    }
}

export default connect()(TrackVolume)