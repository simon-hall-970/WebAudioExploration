import React from 'react'
import TrackMeasure from './Measures'

/*TrackNotes will need to:
        - read number of measures from state
        - create each measure and pass it:
            + measure id
            + time signature
            + subdivision information */

class TrackNotes extends React.Component {

    render() {
        return (
            <TrackMeasure measureNumber={0} trackNumber={this.props.trackNumber}/>
        )
    }
}

export default TrackNotes