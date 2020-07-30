import React from 'react'
import TrackBeats from './TrackBeats'
import TrackControls from './TrackControls'

class TrackContainer extends React.Component {
    
    render() {
        return (
            <div className = 'container'>Load sample
                <TrackControls />
                <TrackBeats trackNumber = {1}/>
            </div>
        )
    }
}


export default TrackContainer