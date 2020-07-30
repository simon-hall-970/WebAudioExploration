import React from 'react'
import { connect } from 'react-redux'
import NoteSelect from './Note'

/*TrackMeasure loops through each subdivision of each beat in a single measure will need to:
        - create a BeatSelect for each beat*/


class TrackMeasure extends React.Component {
    
    n = this.props.measureNumber
    measure = this.props.measures[this.n]
    notesPerMeasure = this.measure.subdivision / this.measure.beatValue * this.measure.beats


    render() {
        let notes = []
        for (let note=0; note<this.notesPerMeasure; note++) {
            notes.push(<NoteSelect 
                key={this.notesPerMeasure*this.n + note+1} //this only works when all measures are the same length
                note = {this.notesPerMeasure*this.n + note+1}
                track = {this.props.trackNumber}
                />)
        }

        return (
            <>
                {notes}
            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        measures: reduxState.measures
    }
}

export default connect(mapStateToProps)(TrackMeasure)