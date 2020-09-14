import React from 'react'
import TrackBeats from './TrackBeats'
import TrackControls from './TrackControls'

class TrackContainer extends React.Component {
    trackClass = `track-container track${this.props.track}`
    render() {
        return (
            <div className = {this.trackClass}>
                <TrackControls track = {this.props.track} />
                <TrackBeats track = {this.props.track}/>
            </div>
        )
    }
}


export default TrackContainer