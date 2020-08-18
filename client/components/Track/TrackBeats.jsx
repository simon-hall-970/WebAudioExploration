import React from 'react'
import { connect } from 'react-redux'
import TrackMeasure from './Measures'

class TrackNotes extends React.Component {

    measuresArr = () => {
        const track = this.props.track
        let firstNote = 1

        return(
            this.props.measures.map((measure, index) => {     
                let notesThisMeasure = (measure.subdivision / measure.beatValue) * measure.beats
                firstNote += notesThisMeasure
                
                return (<TrackMeasure 
                    key={track,index} 
                    measureNumber={index} 
                    track={track} 
                    firstNote={firstNote - notesThisMeasure}
                    notesThisMeasure={notesThisMeasure}/>)
            })
        )
    }

    render() {
    
        return (
            <>
                {this.measuresArr()}
            </>)
    }
}

function mapStateToProps(reduxState) {
    return {
        measures: reduxState.measures,
    }
}

export default connect(mapStateToProps)(TrackNotes)