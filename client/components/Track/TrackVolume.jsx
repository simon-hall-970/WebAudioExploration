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
            <div className="volume track-volume">
                <input id="trackVolume" type="range" max="100" min="0" step='1' onChange={this.volumeHandler} />
                <FontAwesomeIcon icon={faVolumeUp} />
            </div>
        )
    }
}

export default connect()(TrackVolume)