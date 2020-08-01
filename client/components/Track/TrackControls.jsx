import React from 'react'
import { connect } from 'react-redux'
import { audioCtx, setupSamplePiece, playSample, noteScheduler } from '../../audioEngine/audio'
import { addPiece }  from '../../actions/drumkit'

class TrackControls extends React.Component {

    state = {
        play: true,
        track: `track${this.props.track}` //it's ok. props.track will not be updated so this is perfectly legit
    }
    

    loadSample = (evt) => {
        let fileName = evt.nativeEvent.target.value
        return setupSamplePiece(fileName)
        .then (sample => {
            console.log(sample)
            this.props.dispatch(addPiece(this.state.track, sample))
            this.setState({play: false})
            return sample
        })
    }

    play = () => {
        let buffer = this.props.kit[this.state.track]
        if(audioCtx.state === 'suspended') {
            audioCtx.resume()
            .then(playSample(buffer))
        }
        else {
            playSample(buffer)
        }
    }

    playPause = () => {
        let division = this.props.measure[0].subdivision
        let beatVal = this.props.measure[0].beatValue
        let notes = this.props.notes
        let noteCount = this.props.notes.track1[this.props.notes.track1.length-1].note
    
        noteScheduler(this.props.tempo, division, beatVal, notes, this.props.kit, noteCount )

    }

    render() {

        return(
                <div className = 'btn_container'>
                    <button className = 'btn load' onClick={this.loadSample} value='snare.wav'>snare</button>
                    <button className = 'btn play' onClick={this.play} value="snare" >Test</button>
                    <button className = 'btn playPause' disabled={this.state.play} onClick={this.playPause}>
                    ►
                    </button>
                </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.Kit,
        measure: reduxState.measures,
        notes: reduxState.noteSequencer,
        tempo:reduxState.tempo
    }
}

export default connect(mapStateToProps)(TrackControls)