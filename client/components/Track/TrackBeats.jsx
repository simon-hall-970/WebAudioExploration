import React from 'react'
import TrackMeasure from './Measures'

/*TrackBeats will need to:
        - read number of measures from state
        - create each measure and pass it:
            + measure id
            + time signature
            + subdivision information */

class TrackBeats extends React.Component {

    render() {
        return (
            <TrackMeasure />
        )
    }
}