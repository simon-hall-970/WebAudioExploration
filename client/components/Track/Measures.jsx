import React from 'react'
import BeatSelect from './Beat'

/*TrackMeasure loops through each measure and for each beat in the measure will need to:
        - create a BeatSelect*/

class TrackMeasure extends React.Component {
    
    render() {
        return (
            <BeatSelect />
        )
    }
}

export default TrackMeasure