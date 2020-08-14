import React from 'react'
import { connect } from 'react-redux'
import NoteSelect from './Note'
import {addNotes} from '../../actions/noteControl'

/*TrackMeasure loops through each subdivision of each beat in a single measure will need to:
        - create a BeatSelect for each beat*/


class TrackMeasure extends React.Component {
    componentDidMount() {
        this.beatsToState(false, 50)
    }
    measureIdx = this.props.measureNumber
    track = this.props.track
    measure = this.props.measures[this.measureIdx]
    firstNote = this.props.firstNote
    noteCount = this.props.notesThisMeasure

    beatsToState = (checked, velocity) => {
        let beatsArr = [] 
        for (let n=0; n<this.noteCount; n++) {
            let note = this.firstNote + n
            beatsArr.push({
                note,
                checked,
                velocity
            })
        }
        this.props.dispatch(addNotes(this.track, beatsArr))
    }

    render() {
        let notes = []
        for (let note=0; note<this.noteCount; note++) {
            notes.push(<NoteSelect 
                key={this.props.key,note} //this only works when all measures are the same length
                note = {this.props.firstNote + note}
                track = {this.props.track}
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