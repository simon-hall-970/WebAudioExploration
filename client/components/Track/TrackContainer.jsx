import React from 'react'
import TrackBeats from './TrackBeats'
import TrackControls from './TrackControls'

class TrackContainer extends React.Component {
    
    render() {
        return (
            <div className = 'track-container'>Load sample
                <TrackControls track = {this.props.track} />
                <TrackBeats track = {this.props.track}/>
            </div>
        )
    }
}


export default TrackContainer