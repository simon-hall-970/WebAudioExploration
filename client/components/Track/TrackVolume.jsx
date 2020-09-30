import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { updateTrackVolume } from '../../actions/tracks'

class TrackVolume extends React.Component { 
    
    state = {
    style: {width: "auto"}
    }

    trackId = `track${this.props.track}-volume`
    
    componentDidMount() {
            const volumeWrapperElement = document.getElementById(this.trackId).parentElement
            let heightStyle = {
                width: `${volumeWrapperElement.clientHeight}px`,
                top: `${volumeWrapperElement.clientHeight - 16.5}px`
            }
            this.setState({style: heightStyle})
    }

    volumeHandler = (evt) => {
        let trackNumber = this.props.track
        let value = parseInt(evt.target.value, 10)
        this.props.dispatch(updateTrackVolume(trackNumber, value))
    }
    

    render () {
        return (
            <div className="track-vol-wrapper">
                <input id={this.trackId} className="track-volume volume" style={this.state.style} type="range" max="100" min="0" step='1' onChange={this.volumeHandler} />               
            </div>
        )
    }
}

export default connect()(TrackVolume)